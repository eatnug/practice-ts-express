typescript-express

## 아키텍쳐

### 폴더구조

```
src
│   app.ts          # 시작점. entry point
└───api             # 엔드포인트들을 커버하는 컨트롤러
└───config          # 환경변수 등의 설정
└───jobs            # agenda.js를 위한 cron job 명세
└───loaders         # 시작 프로세스를 모듈화함
└───models          # 데이터베이스 모델
└───services        # 비즈니스 로직들
└───subscribers     # 비동기 작업을 위한 이벤트 핸들러
└───types           # 타입명세
```

### 3 Layer Architecture

```
express route controlelr as controller
--------------------------------------
service class as service layer
--------------------------------------
mongoose odm as data access layer
```

라우트 컨트롤, 비즈니스로직, 데이터 엑세스. 세 층을 분리.

## 개발환경

`typescript`로 정적타이핑하고, 빌드한다. `eslint`, `prettier`로 코드스타일을 체크하고, `husky`로 커밋 전 한번 더 확인한다.

## ref

- [견고한 node.js 프로젝트 설계하기](https://velog.io/@hopsprings2/%EA%B2%AC%EA%B3%A0%ED%95%9C-node.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0)
- [Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
