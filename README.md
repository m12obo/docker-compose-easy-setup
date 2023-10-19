
# docker-compose-easy-setup

My docker-compose.yml file to easily setup a development environment.

this will create a docker container running the following

Nginx \
php8.2 - this has composer installed \
mysql8 \
phpMyAdmin \

## Installation

Required:
- [Docker](https://docs.docker.com/engine/install/).
- [docker-compose](https://docs.docker.com/compose/install/).
- [Visual Studio Code](https://code.visualstudio.com)

# 
Create an empty directory with the name of your project.

Navigate to this directory in Visual Studio Code.

Open a terminal in Visual studio Code and clone this repo: (including the . at the end)

```bash
git clone https://github.com/m12obo/docker-compose-easy-setup.git .
```
then in the mysql folder delete the PLACEHOLDER_DELETE_ME\
this step is important as the mysql dir needs to be empty

```bash
DID YOU DELETE THE PLACEHOLDER_DELETE_ME?
```
now run 

```bash
docker-compose up -d
```

wait for the containers to start and make sure the mysql folder is now populated\
once the container has started visit 

```bash
http://localhost
```
and you should see the welcome page

and 

```bash
http://localhost:8001/index.php
```
will show the phpMyAdmin login page






    