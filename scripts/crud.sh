#!/bin/sh

# simple script to test RESTful api
export domain=http://localhost:8080
# create
created_user=$(curl -X POST -H "Content-Type: application/json" -d '{"firstName":"Hello","lastName":"World","email":"helloworld@gmail.com"}' ${domain}/users/)
echo ${created_user}
id=$(echo ${created_user} | cut -f 2 -d':' | cut -f 1 -d',')

# read
curl ${domain}/users
curl ${domain}/users/${id}

# update
curl -X PUT -H "Content-Type: application/json" -d '{"firstName":"Hell","lastName":"Word","email":"hw@gmail.com"}' ${domain}/users/${id}

# delete
curl -X DELETE ${domain}/users/${id}
