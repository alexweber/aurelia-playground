import {Behavior} from 'aurelia-framework';
//import {TodoTask} from '../task/task';

export class TodoItem {
  static metadata() {
    return Behavior.withProperty('item');
  }

  doComplete() {
    this.item.setComplete();
  }

  doIncomplete() {
    this.item.setIncomplete();
  }
}
