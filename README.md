# URL Metadata crawling
URL Metadata 크롤링 웹앱

> Node.js express mongodb

# 시작하기
```docker
docker-compose up 
```

- docker-compose로 Docker MongoDB를 사용하지 않을 때

원격지 MongoDB를 사용할 때 docker-compose를 사용하지 않고 DockerFile에 환경변수 ```MONGO_URI=MongoDB 원격지 URI```를 추가하고 아래 명령으로 빌드세요.

```docker
docker build . -t cocon
docker run -p 3000:3000 -d cocon
```
