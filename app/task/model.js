import Model, { attr } from '@ember-data/model';
export default class TaskModel extends Model {
  @attr('string') description;

  @attr('date') createdAt;

  @attr('boolean', { defaultValue: false }) isDone;
}
