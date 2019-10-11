# Egg Sequelize Demo

在 Egg 中使用 sequelize 示例项目

文章参考：

## 开发

```bash
# 克隆项目
git clone git@github.com:guchongxi/egg-sequelize-demo.git

# 进入项目目录
cd egg-sequelize-demo

# 安装依赖
yarn

# 启动 mysql
docker-compose up -d
# 关闭 mysql [-v]清除数据
# docker-compose down [-v]

# 初始化数据库
yarn db-init
# 重置数据库
# yarn db-reset

# 启动项目
yarn dev
```

访问以下地址查看响应数据

- [http://localhost:7005/apps](http://localhost:7005/apps)
- [http://localhost:7005/users](http://localhost:7005/users)
- [http://localhost:7005/groups](http://localhost:7005/groups)
- [http://localhost:7005/tasks](http://localhost:7005/tasks)
