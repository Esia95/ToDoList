import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service store;
  @service router;

  @tracked status = 'all';

  queryParams = ['status'];

  @action
  showAll() {
    this.status = 'all';
    this.router.transitionTo('/', this.status);
  }

  @action
  showActive() {
    this.status = 'active';
    this.router.transitionTo('/', this.status);
  }

  @action
  showCompleted() {
    this.status = 'completed';
    this.router.transitionTo('/', this.status);
  }
}
