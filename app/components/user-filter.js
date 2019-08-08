import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: 'form',
  // classNames: ['user', 'test'],
  // users: null,
  // firstUser: null,
  // attributeBindings: ['action'],
  // action: 'https://www.google.com',
  // init() {
  //   this._super(...arguments);
  //   console.log('init');
  // },
  // didReceiveAttrs(users) {
  //   this._super(...arguments);
  //   var firstUser = this.get('users.firstObject');
  //   Ember.set(this, 'firstUser', firstUser );
  //   console.log(this.get('firstUser'), 'hit');
  // },
  // willRender() {
  //   this._super(...arguments);
  //   console.log('will render');
  // },
  // didInsertElement() {
  //   this._super(...arguments);
  //   console.log('didinsertElement');
  //   this.$('form button').addClass('enabled');
  //   console.log(document.getElementsByTagName('button')[0].classList.add('hope'));
  // },
  // didRender() {
  //   this._super(...arguments);
  //   console.log('didRender');
  // },
  // input() {
  //   console.log('we are inputing');
  // },
  // submit(e) {
  //   e.preventDefault();
  // }
  firstName: null,
  users: null,
  filterUsers: null,

  didReceiveAttrs() {
    this._super(...arguments);
    var users = this.get('users');
    this.set('filterUsers', users);
  },

  actions: {
    filterList() {
      var firstName = this.get('firstName');
      console.log(firstName, 'i am');
      var users = this.get('users');
      var narrow = users.findBy('name', firstName);
      this.set('filterUsers', [narrow]);
      if(narrow) {
        this.set('filterUsers', [narrow]);
      }else {
        this.set('filterUsers', users);
      }
    },
    newTest() {
      var testAction = this.get('here');
      testAction();
    }
  },

});
