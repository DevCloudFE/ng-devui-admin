export default function (value) {
  return [
    {
      link: './docs/about',
      title: value['intro']['about'],
      linkType: 'routerLink',
    },
    {
      link: './docs/use-materials',
      title: value['intro']['usage'],
      linkType: 'routerLink',
    },
    // {
    //   link: './docs/dev-materials',
    //   title: value['intro']['develop'],
    //   linkType: 'routerLink',
    // },
    {
      link: './overview',
      title: value['blocks']['overview'],
      linkType: 'routerLink',
    },
    {
      title: value['blocks']['form'],
      open: true,
      children: [
        <% _.each(formMenus, function(menu) { %>
        {
          link: '<%= menu.link %>',
          title: value['blocks']['<%= menu.title %>'],
          linkType: '<%= menu.linkType %>',
        },<% }); %>
      ]
    },
    {
      title: value['blocks']['list'],
      open: true,
      children: [
        <% _.each(listMenus, function(menu) { %>
        {
          link: '<%= menu.link %>',
          title: value['blocks']['<%= menu.title %>'],
          linkType: '<%= menu.linkType %>',
        },<% }); %>
      ]
    },
    {
      title: value['blocks']['chart'],
      open: true,
      children: [
        <% _.each(chartMenus, function(menu) { %>
        {
          link: '<%= menu.link %>',
          title: value['blocks']['<%= menu.title %>'],
          linkType: '<%= menu.linkType %>',
        },<% }); %>
      ]
    },
    {
      title: value['blocks']['others'],
      open: true,
      children: [
        <% _.each(otherMenus, function(menu) { %>
        {
          link: '<%= menu.link %>',
          title: value['blocks']['<%= menu.title %>'],
          linkType: '<%= menu.linkType %>',
        },<% }); %>
      ]
    },
  ];
}
