import Ember from 'ember';

export default Ember.Controller.extend({
  users: [{
    id: '1',
    name: 'one',
    job: 'cleaning'
  },{
    id: '2',
    name: 'two',
    job: 'cooking'
  },{
    id: '3',
    name: 'three',
    job: 'cloths washing'
  }],
  actions: {
    testActions() {
      alert(' hery ther');
    }
  }
});
