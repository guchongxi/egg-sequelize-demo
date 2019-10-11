'use strict';

module.exports = (app) => {
  const { Sequelize, model } = app;
  const Users = model.define(
    'users',
    {
      // 用户名
      username: Sequelize.STRING,
      // 邮箱
      email: Sequelize.STRING,
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

  Users.associate = function () {
    // 与应用是 一对多
    app.model.Users.hasMany(app.model.Apps, {
      foreignKey: 'userId',
    });
    // 与任务是 一对多
    app.model.Users.hasMany(app.model.Tasks, {
      foreignKey: 'userId',
    });
    // 与信息是 一对一
    app.model.Users.hasOne(app.model.Infos, {
      foreignKey: 'userId',
    });
  };

  return Users;
};