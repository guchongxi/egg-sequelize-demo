'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/tasks', controller.tasks.index);
  router.get('/apps', controller.apps.index);
  router.get('/users', controller.users.index);
  router.get('/groups', controller.groups.index);
};
