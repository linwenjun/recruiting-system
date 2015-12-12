cat > /etc/yum.repos.d/mongodb.repo << EOM
[MongoDB]
name=MongoDB Repository
baseurl=http://repo.mongodb.org/yum/redhat/6Server/mongodb-org/3.2/x86_64/
gpgcheck=0
enabled=1
EOM

yum -y install mongodb-org
