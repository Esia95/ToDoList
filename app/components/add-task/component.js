import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddTaskModal extends Component {
  @service store;
  @tracked newTask;

  @action
  onDescriptionChange(event) {
    this.newTask = event.target.value;
  }

  @action
  async onSave() {
    const task = { description: this.newTask };
    await this.store.createRecord('task', task);
    this.args.tasks.save();
    this.clearFields();
  }

  clearFields() {
    this.newTask = '';
  }
}
