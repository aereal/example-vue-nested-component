var UserRow = Vue.extend({
  template: '<tr><td>{{ user.name }}</td></tr>',
  replace: true,
  data: {
    user: {},
  },
});

var main = new Vue({
  el: 'main',
  template: '<table><user-row v-with="user: user"></user-row></table>',
  data: {
    user: {
      name: 'steve',
    },
  },
  components: {
    'user-row': UserRow,
  },
});
