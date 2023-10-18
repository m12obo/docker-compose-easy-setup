
# docker-compose-easy-setup

My docker-compose.yml file to easly setup a development environment.

this will create a docker container running the following

Nginx \
php8.2 - this has composer installed \
mysql8 \
phpmyadmin \
babylon.js

## Installation

Required:
- [Docker](https://docs.docker.com/engine/install/).
- [docker-compose](https://docs.docker.com/compose/install/).
- [Visual Studio Code](https://code.visualstudio.com)

# 
Create an empty directory with the name of your project.

Navigate to this directory in Visual Studio Code.

Open a terminal in Visual studio Code and clone this repo:

```bash
git clone https://github.com/m12obo/docker-compose-easy-setup.git .
```

edit the docker-compose.yml file \
replace the items in the {{  }} with the required names  NOTE: remove the {{ }} too eg.

```bash
  {{ network name }}:   # The name of the netwrok eg: nginx-php-mysql-playground
```

edit the default.conf file in the nginx directory \
replace the items in the {{  }} with the required names  NOTE: remove the {{ }} too eg.

```bash
  {{ the-name-of-the-php-service }}:9000 # The name in the docker-compose.yml 
  eg. playground-php82-service:9000;
```

then run 

```bash
docker-compose up -d
```

once the container has started visit 

```bash
http:\\localhost:8080\index.php
```
and you should see the weclome page

and 

```bash
http:\\localhost:8001
```

will show the phpmyadmin login page






    