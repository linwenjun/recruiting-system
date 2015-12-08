## 使用说明：

### clone

```
git clone git@github.com:linwenjun/recruiting-system.git
```

### 配置

切换gh-pages分支

```
git checkout gh-pages
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

** public目录里的文件通过source自动生成，请勿手动修改。 **

### 数据库

添加database，命名为BronzeSword

给mysql添加用户,用户名: BronzeSword 密码：123456

```
create user BronzeSword identified by '123456'
```

将BronzeSword的权限赋给BronzeSword用户

```
grant all privileges on BronzeSword.* to BronzeSword
```

如果你已使用其他数据库或者其他用户名，只需修改build.gradle中的user或者url中的`BronzeSword`
