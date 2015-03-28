import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() {
    return [Router, bootstrap];
  }

  constructor(router, bootstrap) {
    this.bootstrap = bootstrap; // ?

    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        {
          route: ['', 'welcome'],
          moduleId: './welcome',
          nav: true,
          title: 'Welcome'
        },
        {
          route: 'flickr',
          moduleId: './flickr/flickr',
          nav: true
        },
        {
          route: 'todo',
          moduleId: './todo/todo',
          nav: true
        },
        //{
        //  route: 'child-router',
        //  moduleId: './child-router',
        //  nav: false,
        //  title: 'Child Router'
        //}
      ]);
    });
  }
}
