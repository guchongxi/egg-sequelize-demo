'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'groups',
      [
        {
          name: 'test group',
          desc: '这是一个测试分组',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('groups', { name: 'test group' }, {});
  },
};