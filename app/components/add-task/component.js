import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddTaskModal extends Component {
  @service store;
  @tracked newTask;

  @action
  onPropertyChange({ target: { value } }) {
    this.newTask = value;
  }

  @action
  async onSave() {
    const task = { description: this.newTask };
    const newtasks = await this.store.createRecord('task', task);
    await newtasks.save();
    this.args.tasks.update();
    this.clearFields();
  }

  clearFields() {
    this.newTask = '';
  }
}
