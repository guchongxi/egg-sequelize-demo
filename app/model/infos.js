'use strict';

module.exports = (app) => {
  const { Sequelize, model } = app;
  const Infos = model.define(
    'infos',
    {
      // 关联用户 id
      userId: Sequelize.INTEGER,
      // 年龄
      age: Sequelize.INTEGER,
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['deletedAt'],
        },
      },
    },
  );

  Infos.associate = function () {
    // 与用户是 一对一
    app.model.Infos.belongsTo(app.model.Users, {
      foreignKey: 'userId',
    });
  };

  return Infos;
};