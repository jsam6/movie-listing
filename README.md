### prerequisite
* node >= 18
* npm >= 10


### run application with docker
``` bash
$ docker build --no-cache -t movie-app .
$ docker run -p 4200:4200 movie-app
```

### run application locally
``` bash
$ npm install
$ npm run start
```
