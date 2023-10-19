
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
will show the phpMyAdmin login page\
phpMyAdmin username is admin\
phpMyAdmin password is secret\
These can be changed on lines 46 - 49 in the docker.compose.yml

To stop the container use

```bash
docker-compose down
```

# Additional information 

Using Composer, lets install Symfony 6 as an example.

To install Symfony 6, the app folder must be empty so delete the public folder and its contents

then use the following commands in the terminal:

```bash
docker ps
```
this will list the running docker containers

```bash 
docker exec -it playground-php82-container bash
```

we will now be in the shell of the playground-php82-container

then use 

```bash 
composer create-project symfony/skeleton .
```

wait for composer to finish then visit 

```bash
http://localhost
```

and you will see the Symfony 6 welcome screen.


to install twig use 

```bash 
composer require symfony/twig-bundle
```

to install php/unit use 

```bash 
composer require --dev phpunit/phpunit
```

to leave the shell type 

```bash
exit
```

# installing babylon.js

Note: this is just my way and other ways may be better

inside the optional files folder move the babylonJS folder to the public folder then visit

```bash
http://localhost/babylonJS/index.html
```

and you should see an awesome animated Yeti


# Notes

This setup is for what I use and was created to help me create a development environment quickly and easily I hope it helps you to.












    