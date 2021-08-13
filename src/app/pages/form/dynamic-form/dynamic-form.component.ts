import { Component, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DFormData } from 'src/app/@shared/components/dynamic-forms/form-item.interface';

@Component({
  selector: 'da-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  projectFormData = {
    projectName: '',
    projectOwner: null,
    projectExecutor: null,
    projectLabels: [],
    projectCycleTime: [null, null],
    isPublic: true,
    projectExerciseDate: [{ id: '1', label: 'Mon' }],
  };

  verticalLayout: FormLayout = FormLayout.Vertical;

  existProjectNames = ['123', '123456', 'DevUI'];

  checkboxOptions = [
    { id: '1', label: 'Mon' },
    { id: '2', label: 'Tue' },
    { id: '3', label: 'Wed' },
    { id: '4', label: 'Thur' },
    { id: '5', label: 'Fri' },
    { id: '6', label: 'Sat' },
  ];

  labelList = [
    {
      id: 1,
      label: 'OpenSource',
    },
    {
      id: 2,
      label: 'Admin',
    },
    {
      id: 3,
      label: 'DevUI',
    },
  ];

  securityValue = [
    {
      name: 'Public',
    },
    {
      name: 'Only member visible',
    },
  ];

  msgs: Array<Object> = [];

  ExecutorOptions = [
    { id: '1', name: 'Executor1' },
    { id: '2', name: 'Executor2' },
    { id: '3', name: 'Executor3' },
    { id: '4', name: 'Executor4' },
  ];

  OwnerOptions = [
    { id: '1', name: 'Owner1' },
    { id: '2', name: 'Owner2' },
    { id: '3', name: 'Owner3' },
    { id: '4', name: 'Owner4' },
  ];

  formItems: DFormData;

  ngOnInit() {
    this.formItems = {
      projectName: {
        key: 'projectName',
        type: 'textInput',
        label: 'Project Name',
        required: true,
        hasHelp: true,
        helpTips: 'This is the project name.',
        ui: {
          values: this.projectFormData.projectName,
          placeholder: 'Name',
          validateRules: {
            validators: [
              { required: true },
              { minlength: 3 },
              { maxlength: 128 },
              {
                pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/,
                message: {
                  'zh-cn': '仅允许输入数字与大小写字母',
                  'en-us': 'The user name cannot contain characters except uppercase and lowercase letters.',
                },
              },
            ],
            asyncValidators: [
              {
                sameName: this.checkName.bind(this),
                message: {
                  'zh-cn': '用户名重名',
                  'en-us': 'Duplicate name.',
                },
              },
            ],
          },
        },
      },
      projectOwner: {
        key: 'projectOwner',
        label: 'Owner',
        type: 'select',
        required: true,
        hasHelp: true,
        helpTips: 'Owner of each project.',
        ui: {
          values: this.projectFormData.projectOwner,
          placeholder: 'Select Owner',
          options: this.OwnerOptions,
          multiple: true,
          filterKey: 'name',
          extraConfig: {
            labelization: { enable: true, overflow: 'multiple-line' },
          },
          validateRules: [{ required: true }],
        },
      },
      projectExecutor: {
        key: 'projectExecutor',
        label: 'Executor',
        type: 'select',
        required: true,
        hasHelp: true,
        helpTips: 'Executor of each project.',
        ui: {
          placeholder: 'Select Executor',
          values: this.projectFormData.projectExecutor,
          options: this.ExecutorOptions,
          filterKey: 'name',
          extraConfig: {
            labelization: { enable: true, overflow: 'multiple-line' },
          },
          allowClear: true,
          validateRules: [{ required: true }],
        },
      },
      relatedLabels: {
        key: 'Related Labels',
        type: 'tagsInput',
        label: 'Related Labels',
        ui: {
          tags: this.projectFormData.projectLabels,
          suggestionList: this.labelList,
          placeholder: 'please add a tag',
          displayProperty: 'label',
        },
      },
      public: {
        key: 'public',
        type: 'toggle',
        hasHelp: true,
        helpTips: 'whether project is public.',
        label: 'Public',
        ui: {
          checked: this.projectFormData.isPublic,
        },
      },
      projectExerciseDate: {
        key: 'projectExerciseDate',
        type: 'checkbox',
        label: 'Execution Time',
        required: true,
        ui: {
          name: 'exerciseDate',
          values: this.projectFormData.projectExerciseDate,
          options: this.checkboxOptions,
          direction: 'row',
          filterKey: 'label',
          isShowTitle: true,
          validateRules: {
            validators: [{ required: true }],
            asyncValidators: [{ canChoose: this.validateDate.bind(this) }],
          },
        },
      },
    };
  }

  getValue(value: any) {
    console.log(value);
  }

  checkName(value: string) {
    let res = true;
    if (this.existProjectNames.indexOf(value) !== -1) {
      res = false;
    }
    return of(res).pipe(delay(500));
  }

  validateDate(value: any): Observable<any | null> {
    let message = null;
    for (const item of value) {
      if (item.id === '2') {
        message = {
          'zh-cn': `当前日期队列已满`,
          'en-us': 'The task queue on the current execution day (Tuesday) is full.',
        };
      }
    }
    return of(message).pipe(delay(300));
  }

  submitProjectForm({ valid }: any) {
    if (valid) {
      of(this.formItems)
        .pipe(
          map((val) => 'success'),
          delay(500)
        )
        .subscribe((res) => {
          if (res === 'success') {
            this.showToast('success', 'Success', 'Registration succeeded.');
          }
        });
    } else {
      this.showToast('error', 'Error', 'Check whether all validation items pass.');
    }
  }

  showToast(type: any, title: string, msg: string) {
    this.msgs = [{ severity: type, summary: title, detail: msg }];
  }
}
