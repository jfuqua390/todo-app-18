import Ember from 'ember';

export default Ember.Controller.extend({
  newReminder: {
    name: ``,
    done: false,
  },
  saveReminder(list, attrs) {
    console.log(attrs);
    const reminder = this.store.createRecord(`reminder`, attrs);
    reminder.set(`list`, list);

    reminder.save().then(() => {
      this.set(`newReminder`, {
        name: ``,
      });
    });
  },
  isComplete(reminder, done) {
    reminder.set(`done`, !done);
    reminder.save();
  },
  deleteList(list) {
    if (window.confirm(`Are you sure you want to delete this list?`)) {
      list.destroyRecord();
      this.transitionToRoute(`list`);
    }
  },
});
