'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'tasks',
      [
        {
          appId: 1,
          userId: 1,
          description: 'test 描述',
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          appId: 1,
          description: 'test 描述 该任务没有执行用户',
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('tasks', { appId: 1 }, {});
  },
};
