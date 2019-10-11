'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'apps',
      [
        {
          name: 'test app',
          userId: 1,
          gitUrl: 'git@github.com:guchongxi/egg-sequelize-demo.git',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('apps', { gitUrl: 'git@github.com:guchongxi/egg-sequelize-demo.git' }, {});
  },
};
