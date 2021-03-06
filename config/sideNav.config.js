export default [
  {
    value: '/dashboard',
    text: 'Dashboard',
    icon: 'lugia-icon-financial_monitoring',
    children: [
      {
        value: '/dashboard/analyse',
        text: '分析页',
      },
    ],
  },
  {
    value: '/form',
    text: '表单页',
    icon: 'lugia-icon-financial_editor',
    children: [
      {
        value: '/form/basic-form',
        text: '基础表单',
      },
      {
        value: '/form/step-form',
        text: '分步表单',
      },
      {
        value: '/form/advanced-form',
        text: '高级表单',
      },
    ],
  },
  {
    value: '/list',
    text: '列表页',
    icon: 'lugia-icon-financial_table',
    children: [
      {
        value: '/list/table-list',
        text: '查询表格',
      },

      {
        value: '/list/card-list',
        text: '卡片列表',
      },
    ],
  },
  {
    value: '/detail',
    text: '详情页',
    icon: 'lugia-icon-financial_questionnaire',
    children: [
      {
        value: '/detail/basic-detail',
        text: '基础详情页',
      },
      {
        value: '/detail/advanced-detail',
        text: '高级详情页',
      },
    ],
  },
  {
    value: '/result',
    text: '结果页',
    icon: 'lugia-icon-reminder_check_circle_o',
    children: [
      {
        value: '/result/success',
        text: '成功页',
      },
      {
        value: '/result/failed',
        text: '失败页',
      },
    ],
  },
  {
    value: '/abnormal',
    text: '异常页',
    icon: 'lugia-icon-reminder_warning',
    children: [
      {
        value: '/abnormal/403',
        text: '403',
      },
      {
        value: '/abnormal/404',
        text: '404',
      },
      {
        value: '/abnormal/500',
        text: '500',
      },
    ],
  },
  {
    value: '/personal',
    text: '个人页',
    icon: 'lugia-icon-financial_user',
    children: [
      {
        value: '/personal/center',
        text: '个人中心',
      },
      {
        value: '/personal/settings',
        text: '个人设置',
      },
    ],
  },
  {
    value: '/mobilePanel',
    text: '移动板块',
    icon: 'lugia-icon-logo_windows_o',
  },
];
