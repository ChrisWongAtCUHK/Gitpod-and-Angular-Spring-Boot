drop table user if exists;
create table user (id integer not null auto_increment, email varchar(255), first_name varchar(255), last_name varchar(255), primary key (id));
