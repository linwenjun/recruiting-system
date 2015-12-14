create table users (
    id int not null primary key AUTO_INCREMENT,
    email varchar(100) not null,
    mobilePhone varchar(100) not null,
    password varchar(100) not null,
    createDate int(11) not null
);
