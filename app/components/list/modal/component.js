import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ListModal extends Component {
  @service store;

  get shouldDisabledButton() {
    return !this.args.task.hasDirtyAttributes;
  }

  @action
  onPropertyChange(propName, { target: { value } }) {
    this.args.task[propName] = value;
  }

  @action
  async onSave() {
    await this.args.task.save();
    this.args.onClose();
  }

  @action
  onClose() {
    this.args.onClose();
  }
}
