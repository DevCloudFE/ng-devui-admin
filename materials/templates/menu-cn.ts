export default {
  menu: {
    intro: {
      about: '关于 Admin 区块',
      usage: '使用区块',
      develop: '开发区块',
    },
    blocks: {
      form: '表单类',
      list: '列表类',
      chart: '图表类',
      others: '其他',
      overview: '区块总览',<% _.each(menus, function(menu) { %>
      '<%= menu.title %>': '<%= menu.blockName %>',<% }); %>
    },
  },
};
