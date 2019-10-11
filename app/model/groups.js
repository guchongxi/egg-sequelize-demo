'use strict';

module.exports = (app) => {
  const { Sequelize, model } = app;
  const Groups = model.define(
    'groups',
    {
      // 组名
      name: Sequelize.STRING,
      // 描述
      desc: Sequelize.STRING,
    },
    {
      // 默认不输出 deletedAt 字段
      // 参考 https://sequelize.org/master/class/lib/model.js~Model.html#static-method-scope
      defaultScope: {
        attributes: {
          exclude: ['deletedAt'],
        },
      },
    },
  );

  Groups.associate = function () {
    // 与应用是 多对多
    app.model.Groups.belongsToMany(app.model.Apps, {
      through: app.model.GroupApp,
      foreignKey: 'groupId',
      otherKey: 'appId'
    });
  };

  return Groups;
};