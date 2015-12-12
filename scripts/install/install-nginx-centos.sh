cat > /etc/yum.repos.d/nginx.repo << EOM
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/mainline/centos/6/x86_64/
gpgcheck=0
enabled=1
EOM

yum -y install epel-release
yum -y install nginx
