import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ListComponent extends Component {
  @service store;
  @tracked isShowModal = false;
  @tracked isDone = false;
  @tracked selectedTaskToEdit;

  @action
  async onDeleted(task) {
    await task.destroyRecord();
  }

  @action
  async onIsDone(task) {
    task.isDone = true;
    await this.args.tasks.save();
  }

  @action
  onShowModal(task) {
    this.selectedTaskToEdit = task;
    this.isShowModal = true;
  }

  @action
  onHideModal() {
    this.isShowModal = false;
  }
}
