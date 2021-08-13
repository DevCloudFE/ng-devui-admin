export default function (values: any) {
  return [
    {
      title: values['dashboard']['title'],
      children: [
        {
          title: values['dashboard']['analysis'],
          link: '/pages/dashboard/analysis',
        },
        {
          title: values['dashboard']['monitor'],
          link: '/pages/dashboard/monitor',
        },
        {
          title: values['dashboard']['workspace'],
          link: '/pages/dashboard/workspace',
        },
      ],
      link: '/pages/dashboard',
      menuIcon: 'icon icon-console',
    },
    {
      title: values['form']['title'],
      children: [
        {
          title: values['form']['basicForm'],
          link: '/pages/form/basic-form',
        },
        {
          title: values['form']['formLayout'],
          link: '/pages/form/form-layout',
        },
        {
          title: values['form']['advancedForm'],
          link: '/pages/form/advanced-form',
        },
        {
          title: values['form']['dynamicForm'],
          link: '/pages/form/dynamic-form',
        },
      ],
      link: '/pages/form',
      menuIcon: 'icon icon-modify',
    },
    {
      title: values['list']['title'],
      children: [
        { title: values['list']['basicList'], link: '/pages/list/basic' },
        { title: values['list']['cardList'], link: '/pages/list/card' },
        {
          title: values['list']['editableList'],
          link: '/pages/list/editable',
        },
        { title: values['list']['advanceList'], link: '/pages/list/advance' },
        { title: values['list']['treeList'], link: '/pages/list/tree' },
      ],
      link: '/pages/list',
      menuIcon: 'icon icon-table',
    },
    {
      title: values['abnormal']['title'],
      children: [
        { title: '403', link: '/pages/abnormal/abnormal403' },
        { title: '404', link: '/pages/abnormal/abnormal404' },
        { title: '500', link: '/pages/abnormal/abnormal500' },
      ],
      link: '/pages/abnormal',
      menuIcon: 'icon icon-unload',
    },
    {
      title: values['user']['title'],
      children: [
        { title: values['user']['center'], link: '/pages/user/center' },
        { title: values['user']['settings'], link: '/pages/user/settings' },
      ],
      link: '/pages/user',
      menuIcon: 'icon icon-mine',
    },
  ];
}
