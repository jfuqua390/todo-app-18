import Ember from 'ember';

export default Ember.Controller.extend({
  newReminder: {
    isDone: false,
    description: ``,
  },
  saveReminder(list, attrs) {
    console.log(attrs);
    const reminder = this.store.createRecord(`reminder`, attrs);
    reminder.set(`list`, list);

    reminder.save().then(() => {
      this.set(`newReminder`, {
        isDone: false,
        description: ``,
      });
    });
  },
});
