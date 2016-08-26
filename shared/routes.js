import React from 'react';
import App from './App';

function loadRoute (cb) {
  return (module) => cb(null, module.default);
}

function errorLoading (err) {
  console.error('Fail');
}

export default {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: '/children',
      getComponent (location, cb) {
        System.import('./Children')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
}
