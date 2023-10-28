
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

to install doctrine use

```bash 
composer require doctrine
```
 update the database entries in the .env file with mySQL information in the\
 docker-compose.yml file

 to add PHP coding standards use [PHP fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer)

 ```bash
 composer require --dev friendsofphp/php-cs-fixer
 ```

# React

NOTE: React we will need a few more dependencies

Webpack-Encore\
Symfony UX React\
Yarn

to install webpack-encore use

```bash
composer require symfony/webpack-encore-bundle
```

then to install symfony/ux-react use

```bash
composer require symfony/ux-react
```

the type

```bash
exit
```

add react helpers using 

```bash 
docker-compose run --rm playground-node-service yarn add @babel/preset-react --dev --force
```

then

```bash
docker-compose run --rm playground-node-service yarn watch
```

this will watch for changes in the assets/react/controllers/ folder and compile the JSX files.

All dependencies will now be installed.

# installing babylon.js

Note: this is just my way and other ways may be better


```bash
docker-compose run --rm playground-node-service npm install --save-dev @babylonjs/core
```

then

```bash
docker-compose run --rm playground-node-service npm install --save-dev @babylonjs/inspector
```

inside the optional files folder move the babylonJS folder to the public folder then visit

```bash
http://localhost/babylonJS/index.html
```

and you should see an awesome animated Yeti

# installing three.js

Note: this is just my way and other ways may be better


```bash
docker-compose run --rm playground-node-service npm install --save three
```


# Notes

This setup is for what I use and was created to help me create a development environment quickly and easily I hope it helps you to.
