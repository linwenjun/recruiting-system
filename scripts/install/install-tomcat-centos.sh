cd /opt
groupadd tomcat
useradd -M -s /bin/nologin -g tomcat -d /opt/tomcat tomcat
wget http://mirror.bit.edu.cn/apache/tomcat/tomcat-9/v9.0.0.M1/bin/apache-tomcat-9.0.0.M1.tar.gz

tar xzf apache-tomcat-9.0.0.M1.tar.gz -C /opt/tomcat --strip-components=1
cd /opt/tomcat

sudo chgrp -R tomcat conf
sudo chmod g+rwx conf
sudo chmod g+r conf/
sudo chown -R tomcat webapps/ work/ temp/ logs/

echo "export CATALINA_HOME=\"/opt/tomcat\"" >> ~/.bashrc
source ~/.bashrc
