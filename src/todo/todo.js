export class Todo {
  static inject() {
    return [];
  }

  constructor() {
    // $scope.
    this.heading = 'ToDo List';
    this.items = [];
  }

  activate() {
    // Equivalent to angular ui router resolve
    this.items = [
      {
        id: 1,
        title: 'Learn Aurelia'
      },
      {
        id: 2,
        title: 'Learn Angular 2?'
      }
    ]
  }
}
