使用说明：
----------

### clone

```
git clone git@github.com:linwenjun/recruiting-system.git
```

### 配置

切换dev分支

```
git checkout dev
```

安装npm依赖包

```
npm install
```

第一次使用手动build项目

```
gulp build
```

### 使用

启动server

```
gulp server
```

用浏览器启动

```
http://localhost:8080/
```

### 注意

\** public目录里的文件通过source自动生成，请勿手动修改。 \*\*

### 数据库

添加database，命名为BronzeSword

CREATE DATABASE `BronzeSword` CHARACTER SET utf8 COLLATE utf8_general_ci;

给mysql添加用户,用户名: BronzeSword 密码：12345678

```
create user 'BronzeSword'@'localhost' identified by '12345678';
```

将BronzeSword的权限赋给BronzeSword用户

```
grant all privileges on BronzeSword.* to 'BronzeSword'@'localhost';
flush privileges;
```
