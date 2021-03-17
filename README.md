# Common Linux Commands

To get list of params of each command, using this pattern: `<command> --help`

To get the version of command/package, using this pattern: `<command> --version`

To run command as superuser, put `sudo` at the begining of line

## Clear terminal screen

`clear`

## Print system info

1. Print system info: `uname`
2. Print all system info: `uname -a`

## List items in current folder

1. list items in current folder: `ls`
2. list all items (including hidden items): `ls -a`

## Change directory

1. go down to subfolder in current folder: `cd <foldername or path>`
2. go up to parent of current folder: `cd ..`

## Create folder

`mkdir <folder name>`

## Delete folder and its content

`rm -Rf <folder name>`

## Create file

`touch <file>`

ex: `touch hello.js`

## Delete file

`rm <file name>`

## View running processes, threads, RAM usage, CPU usage...

`top`

to exit `top` press `Ctrl + C`

## Install packages

`apt-get install <list of package names separated by whitespace>`

or

`sudo apt-get install <list of package names separated by whitespace>`

## Remove packages

`apt-get remove <list of package names separated by whitespace>`

or

`sudo apt-get remove <list of package names separated by whitespace>`

## List all using ports

`netstat -tulpn | grep LISTEN`

OR

`sudo lsof -i -P -n | grep LISTEN`

## Reboot system

`reboot`

## Shutdown system

`shutdown -p`

# Edit file in Terminal

## using Nano

1. Open file: `nano <filename>`
2. Save changes: `Ctrl + S`
3. Exit nano: `Ctrl + X`

## using VIM

1. Open file: `vi <filename>`
2. Using arrow keys to move cursor
3. Turn on edit mode: press `i`
4. Exit edit mode: press Ecs
5. Save changes and exit vim: type `:wq` and press Enter
6. Exit and discard changes: type `:q!` and press Enter

# DOCKER commands

## List all containers

1. Print running containers: `docker ps`
2. Print all containers: `docker ps -a`

## List all images

`docker images`

OR

`docker images --all`

## Build image from docker file

`docker build <docker file or path to docker file>`

## Remove images

`docker rmi <images>`
OR
`docker rmi -f <images>`

## Create container

`docker create <image name>`

## Remove containers

`docker rm <containers>`
OR
`docker rm -f <containers>`

## Copy files/folders between containers and localsystem

`docker cp <container>:<path to file/folder> <destination in localsystem>`

## Start containers

`docker start <container ids or names>`

## Stop containers

`docker stop <container ids or names>`

## Run a command inside a container

`docker exec <container> <command>`

## Show running process in container

`docker top <container>`

## Show logs of container

    `docker logs <container>`

## Clean all docker images and containers

    `docker system prune --all`

# Docker-compose commands

docker-compose allow us to define and run multi-container with docker.

We can define containers in one file named `docker-compose.yml`.

When we run command `docker-compose up`, docker will automatically pull all images, create containers, and run it.

To stop all defined containers, just run `docker-compose down`.

Note that `docker-compose` only runs on a file same name as `docker-compose`.

# Node commands

Using param `--global` to run node command on global/root node

Print node version, run `node --version`

Print npm version, run `npm --version`

Print nvm version, run `nvm --version`

## Install node-modules and packages that declared in package.json

    `npm install`

## Install packages

    `npm install <package names>`

To save packages need for development, using `--save-dev`

## Remove packages

    `npm uninstall <package names>`

## List all packages in current node/project

`npm ls`

# Shortcut keys in Ubuntu

## terminal

copy

    ctrl + shift + C

paste

    ctrl + shift + V

switch between workspaces

    ctrl + alt + arrow(up, down, left, right)

move selected Window to other workspaces

    ctrl + shift + alt + arrow(up, down, left, right)

## VSCODE

format code

    shift + alt + F

save current file

    ctrl + S

move lines/carrets

    select lines and press: `alt + arrow(up, down, left, right)

copy lines

    select lines and press: `ctrl + shift + arrow(up, down, left, right)

quick select a word

    ctrl + shift + arrow(left, right)

insert another cursor

    shift + alt + arrow(up, down)

edit multiple words

    select to-be-edited word and press: ctrl + D


#INSTALL DOCKER & COMPOSE ON UBUNTU

	sudo apt update
	sudo apt install apt-transport-https ca-certificates curl software-properties-common

	sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable edge test"

	sudo apt-get update
	apt-cache policy docker-ce
	sudo apt-get install -y docker-ce

docker status:

	sudo systemctl status docker

grant permission:

	sudo usermod -aG docker $(whoami)

###subsequent starting group of services, use EITHER one of these:

	docker-compose up
		hit Ctrl+C to stop

	docker-compose up --detach
		docker-compose stop

	docker-compose start
		docker-compose stop