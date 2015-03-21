export class ToDo {
  static inject() {
    return [];
  }

  constructor() {
    this.pageTitle = 'My ToDo list';

    // @TODO use a service or whatever the aurelia equivalent is! :)
    this.tasks = [
      {
        title: 'Learn Aurelia',
        complete: false,
        description: 'Lorem ipsum bla bla'
      },
      {
        title: 'Buy milk',
        complete: false,
        description: 'Preferrably bovine.'
      },
      {
        title: 'Pick up kids from school',
        complete: false,
        description: "By 5 o clock or else you're in trouble mister"
      },
      {
        title: 'Buy dogfood',
        complete: false,
        description: 'Lest he starve.'
      }
    ];
  }
}
