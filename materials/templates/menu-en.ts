export default {
  menu: {
    intro: {
      about: 'About Admin Blocks',
      usage: 'Using Blocks',
      develop: 'Developing Blocks',
    },
    blocks: {
      form: 'Form',
      list: 'List',
      chart: 'Chart',
      others: 'Others',
      overview: 'Overview',<% _.each(menus, function(menu) { %>
      '<%= menu.title %>': '<%= menu.blockNameEn %>',<% }); %>
    },
  },
};
