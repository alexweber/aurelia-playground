import {Router} from 'aurelia-router';

export class ChildRouter {
  static inject() {
    return [Router];
  }

  constructor(router) {
    this.heading = 'Child Router';
    this.router = router;

    router.configure(config => {
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
