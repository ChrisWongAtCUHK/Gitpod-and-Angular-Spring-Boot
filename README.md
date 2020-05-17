# Spring Boot REST API
## Run on Gitpod
1. api
<a href="https://gitpod.io/from-referrer/" style="padding: 10px;">
    <img src="https://gitpod.io/button/open-in-gitpod.svg" width="150" alt="Push" align="center">
</a>
2. Angular app
* change portal-app/src/environments/environment.prod.ts
```
export const environment = {
  userUrl: 'https://{{workspace}}.gitpod.io/users',
  production: true
};
```
* deploy to GitHub pages
```
cd portal-app
npm run deploy
```
P.S. the `predeploy` script in package.json should be changed once.

## Run by Maven
```
./mvnw spring-boot:run
```

# References
- [Spring Boot Rest APIs](https://www.devglan.com/spring-boot/spring-boot-angular-example)
    * [spring-boot-angular5](https://github.com/only2dhir/spring-boot-angular5)
- [Spring Boot + Angular 8 +Spring Data + Rest Example(CRUD)](https://www.devglan.com/spring-boot/spring-boot-angular-8-example)
- [Spring Boot - Loading Initial Data](https://stackoverflow.com/questions/38040572/spring-boot-loading-initial-data)