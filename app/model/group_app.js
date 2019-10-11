'use strict';

module.exports = (app) => {
  const { Sequelize, model } = app;
  const GroupApp = model.define(
    'group_app',
    {
      // 应用 id
      appId: Sequelize.INTEGER,
      // 群组 id
      groupId: Sequelize.INTEGER,
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['deletedAt'],
        },
      },
    },
  );

  return GroupApp;
};