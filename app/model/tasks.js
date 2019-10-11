'use strict';

module.exports = (app) => {
  const { Sequelize, model } = app;
  const Tasks = model.define(
    'tasks',
    {
      // 应用 id
      appId: Sequelize.INTEGER,
      // 创建任务用户 id
      userId: Sequelize.INTEGER,
      // 构建状态
      status: Sequelize.INTEGER,
      // 任务描述
      description: Sequelize.STRING,
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['deletedAt'],
        },
      },
    },
  );

  Tasks.associate = function () {
    // 与用户是 多对一
    app.model.Tasks.belongsTo(app.model.Users, {
      foreignKey: 'userId',
    });
    // 与应用是 多对一
    app.model.Tasks.belongsTo(app.model.Apps, {
      foreignKey: 'appId',
    });
  };

  return Tasks;
};