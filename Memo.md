# GraphQL

## REST API 문제점

1. Over-fetching

- 사용자 목록을 리스트로 보여준다고 가정했을 때,
  필요한 정보는 사용자 이름이지만 사용도 안할 여러 정보를 함께 받게됨
- 요청한 영역의 정보보다 많은 정보를 서버에서 받게되는걸 `over-fetching`이라고 함

2. Under-fetchings

- `REST`에서 하나를 완성하기 위해 다른 요청들을 해야하는 경우

## Graphql

- `Graphql`은 개발자가 어떤 정보를 원하는 지에 대해 통제할 수 있음
- `URL` 체계가 없으며, 하나의 `EndPoint` == `Query`로 모든게 가능

### Step

1. Install

- [x] graphql-yoga
- [x] nodemon
- [x] babel-cli, babel-preset-env, babel-preset-stage-3

2. Setting

- .babelrc 설정

3. Make Server

- 아래 `URL` 의 `Quickstart` 참조
- https://github.com/prisma/graphql-yoga

4. schema

- 무엇을 주고 받을지에 대한 `설명`
- `schema.graphql` 파일 참조

[용어]

- `Query` : `Database`로 부터 정보를 얻는 것
- `Mutation` : `server` 혹은 `database`에서 정보를 바꾸는 작업
- `Resolve` : query에 대한 해결 ..? view..?
- `Playground` : 일종의 postman 같은 역할로 database를 테스트 해볼 수 있는 곳
