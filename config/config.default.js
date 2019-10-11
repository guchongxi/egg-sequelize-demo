'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_egg-sequelize-demo';

  config.sequelize = {
    // 数据库类型
    dialect: 'mysql',
    // 数据库地址
    host: '127.0.0.1',
    // 端口
    port: 3306,
    // 数据库名
    database: 'test-database',
    // 用户名，默认为 root
    username: 'root',
    // 密码，默认为空
    password: '',
    // sequelize 配置
    define: {
      // 添加createAt,updateAt,deleteAt时间戳
      timestamps: true,
      // 使用软删除，即仅更新 deleteAt 时间戳 而不删除数据
      paranoid: true,
      // 不允许修改表名
      freezeTableName: true,
      // 禁止驼峰式字段默认转为下划线
      underscored: false,
    },
    // 由于orm用的UTC时间，这里必须加上东八区，否则设置的时间相差8小时
    timezone: '+08:00',
    // mysql2 配置
    dialectOptions: {
      // 让读取date类型数据时返回时间戳而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return new Date(field.string()).valueOf();
        }

        return next();
      },
    },
  };
  config.security = {
    csrf: {
      // 目前没有可视化界面， 因此先禁用
      enable: false,
    }
  }

  return config;
};
