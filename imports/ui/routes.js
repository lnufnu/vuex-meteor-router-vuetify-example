import { RouterFactory } from 'meteor/akryum:vue-router2';

import Home from '/imports/ui/views/Home.vue';

RouterFactory.configure(factory => {
  factory.addRoutes([
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ])
});
