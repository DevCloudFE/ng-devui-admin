export interface DFormData {
  [key: string]: DFormItem;
}

export interface DFormItem {
  key: string;
  order?: number;
  type: DWidgetType;
  label: string;
  required?: boolean;
  hasHelp?: boolean;
  helpTips?: string;
  hasFeedback?: boolean;
  feedbackStatus?: 'error' | 'pending' | 'success';
  ui: DFormUI;
}

export interface DFormUI {
  [key: string]: any;
}

export type DWidgetType = 'select' | 'radio' | 'checkbox' | 'tagsInput' | 'textInput' | 'textarea' | 'toggle' | 'tagsInput';