'use strict';

module.exports = (app) => {
  const { Sequelize, model } = app;
  const Apps = model.define(
    'apps',
    {
      // 创建用户 id
      userId: Sequelize.INTEGER,
      // 应用中文名
      name: Sequelize.STRING,
      // 应用仓库地址，ssh 风格
      gitUrl: Sequelize.STRING,
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['deletedAt'],
        },
      },
    },
  );

  Apps.associate = function () {
    // 与用户是 多对一
    app.model.Apps.belongsTo(app.model.Users, {
      foreignKey: 'userId',
    });
    // 与任务是 一对多
    app.model.Apps.hasMany(app.model.Tasks, {
      foreignKey: 'appId',
    });
    // 与群组是 多对多
    app.model.Apps.belongsToMany(app.model.Groups, {
      through: app.model.GroupApp,
      foreignKey: 'appId',
      otherKey: 'groupId'
    });
  };

  return Apps;
};