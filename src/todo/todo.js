import { TodoTask } from "../task/task";

export class Todo {
  static inject() {
    return [];
  }

  constructor() {
    // $scope.
    this.heading = 'ToDo List';
    this.items = [];

    // Init add form.
    this.newTitle = '';
    this.newDesc = '';
  }

  // Submit handler.
  addTask() {
    this.items.push(new TodoTask(this.newTitle, this.newDesc));
    this.newTitle = '';
    this.newDesc = '';
  }

  activate() {
    // Equivalent to angular ui router resolve
    this.items = [
      new TodoTask('Start stream', 'Hey :)', true),
      new TodoTask('Learn Aurelia', 'Lorem ipsum'),
      new TodoTask('Build App', 'Lorem ipsum')
    ]
  }
}
