# 启动 mysql
service mysqld restart

# 启动 mongodb
/etc/init.d/mongod restart

# 启动 nginx
/etc/init.d/nginx restart

# 启动 tomcat
cd /opt/apache-tomcat-9.0.0.M1
./bin/shutdown.sh
./bin/startup.sh
cd -
