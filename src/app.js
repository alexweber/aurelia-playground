import {Router} from 'aurelia-router';

export class App {
  static inject() {
    return [Router];
  }

  constructor(router) {
    this.router = router;

    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        {
          route: ['', 'welcome'],
          moduleId: 'welcome/welcome',
          nav: true,
          title: 'Welcome :)'
        },
        {
          route: 'flickr',
          moduleId: 'flickr/flickr',
          nav: true,
          title: 'Welcome to flickr'
        },
        {
          route: 'child-router',
          moduleId: 'child-router',
          nav: true,
          title: 'Child Router'
        }
      ]);
    });
  }
}
