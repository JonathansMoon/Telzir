<h1 align="center">
    <img alt="Jonathan's" src="https://i.pinimg.com/originals/52/1a/fa/521afaada5d1c270249703e2420fbbb3.png" />
    <br>
    Telzir - Fale Mais
</h1>

<p align="center">

<p align="center">
  <a href="#Moon-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img src="https://github.com/JonathansMoon/files/blob/master/images/GameKing.jpg">
</p>

## :computer: Technologies

This project was developed at the [Jonathan's Moon](#) with the following technologies:

<h3>Databases</h3>

- [Mysql](https://www.mysql.com/)

<h3>DevOps</h3>

- [docker](https://www.docker.com/)

<h3>Backend - PHP</h3>

- [Laravel](https://laravel.com/)
- [Redis by Cache](https://redis.io/)
- [PHP Unit](https://phpunit.de/)

<h3>Frontend - React JS</h3>

- [expo](https://expo.io/)
- [formik](https://formik.org/docs/overview)
- [Axios](https://github.com/axios/axios)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)

<h3>Mobile - React Native</h3>

- [expo](https://expo.io/)
- [formik](https://formik.org/docs/overview)
- [Axios](https://github.com/axios/axios)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)

## :computer: Technologies

This project was developed at the [Jonathan's Moon](#) with the following Design Patterns:

- Repositories
- Services
- Dependency Injection

## :information_source: How To Use

To clone and run this application, you'll only need [Docker](https://www.docker.com/), [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/JonathansMoon/Telzir.git

# Go into the repository
$ cd Telzir

# Run the command for permission.
$ chmod +x ./run.sh

# Run the command to mount the php and nginx image on the docker
# This will automatically perform the migrations and seeds,
# Install dependencies for all projects
# in addition to configuring and running your project via docker.
$ sudo ./run.sh

# To start the frontend project do the following:
$ yarn start

# To start the mobile project do the following:
$ yarn start

# To run tests on the backend, perform the following:
$ cd backend
$ docker exec -it falemais-app bash
$ php artisan test

# Execute to stop execution in backend
$ sudo docker-compose down
```

## :memo: License

This project is under the MIT license.

Made with ♥ by Jonathan Silva :wave: [Get in touch!](https://www.linkedin.com/in/jonathan-silva-gomes-53271a168/)

[vc]: https://code.visualstudio.com/
