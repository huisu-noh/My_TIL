## GraphQL 기본

## Ch. 07

## GraphQL 기본 1

#### GraphQL 이란 무엇인가?

- Facebook 이 만든 쿼리언어

- GraphQL을 사용하는 앱은 서버가 아닌 데이터를 제어하기 때문에
  빠르며 안정적이다.

- 하나의 리소스 속성에 액세스 할 뿐만 아니라 리소스 간의 참조를 자연스럽게 이해한다.

- GraphQL API는 엔드포인트가 아닌 타입과 필드로 구성된다.

- 강력한 개발자 도구 제공한다.

- 요청의 주체가 웹 클라이언트 이다.

#### 쿼리 언어란 무엇인가?

- SQL : 구조화된 질의어

- RDBMS 의 데이터 관리를 위해 설계된 언어

- DB로부터 데이터를 효율적으로 가져오기 위해 사용한다.

## REST API vs GraphQL

#### 리소스

#### REST API : 리소스 모양과 크기는 서버에 의해 결정된다.

- REST API 가 어떤 데이터를 내려줄지 프론트단에서는 알 수 없음.

#### GraphQL : 클라이언트가 필요한 리소스를 요청한다.

- 질의 자체를 하는 주체가 웹클라이언트가 되기 떄문에 클라이언트가 필요한 리소스를 요청한다.

#### 엔드포인트

- REST API : 다중 엔드포인트, URL과 Method에 따라 접근할 수 있는 데이터가 다르다.

- GraphQL : 보통은 단일 엔드포인트, GraphQL 스키마에 따라 데이터가 다르다.

- 스키마 : 요청하는 데이터가 어떤 구조를 가지고 있는가 를 스키마를 통해 미리 만들어 놓는다.

### 라우트 핸들러와 리졸버

- REST API : 각 요청은 정확히 하나의 경로 처리 함수를 호출

- GraphQL : 하나의 쿼리가 여러 리졸버를 호출하여 여러 리소스가 포함된 중첩 응답 구성

- 요청하는 쪽에서 원하는것을 요청할수 있다.

## GraphQL 이 REST API 보다 나은점?

- REST API를 사용할 경우 일반적으로 여러 엔드포인트에 엑세스 해서 데이터를 수집해야한다.
- GraphQL 은 구체적인 데이터 요구사항이 포함된 단일쿼리로 요청가능.

> 사용자/게시물/팔로워 데이터를 받아오려면

```
REST API


/users/<id>
/users/<id>/posts
/users/<id>/followers

```

- GraphQL

```
query{
User(id:"qweq34q34"){
name
posts{title}
followers{name}
}
}
```

- REST API 는 overfetching 과 underfetching을 유발 시킨다

```
사용자 이름만 알고싶은데
/users/<id> 호출하면 서버가 정해둔 모든 데이터를 받아오게 된다.
```

- 프론트엔드에서 신속한 제품 이터레이션을 돌릴 수 있다.
  (서버에 매번 API요청하지 않아도 된다.)

- 백엔드에서 분석이 가능하다. (프론트엔드 에서 어떤 데이터를 가져다 쓰는지 알 수 있게 되므로)

- 스키마 및 타입시스템의 이점이 있다.
  (프론트엔드와 백엔드가 사용하는 데이터 구조를 맞출 수 있다.)

### GraphQL 이 나온 이유?

- 같은 화면이어도 모바일웹/모바일앱/PC웹 에서 각각 다른 UI로 화면을 구성할 필요가 있었음.
- 게시글에 대해서 보여주는 데이터가 제각각 인데 이런 상황을 해소하기위해 REST API 와 다른 접근을 한 것.

### 환경 설정 및 프로젝트 생성

1. 프로젝트 만들 경로로 이동한다.

2. `npm init -y`

3. 필요한 패키지를 설치한다.

```
npm i apollo-server graphql nodemon
```

4. package.json 수정한다.

- main과 start 부분만 추가하면 된다.

```
"main":"index.js",
"scripts":{
  "start":"nodemon -e js,json,graphql",
}
```

5. route 경로에서 index.js 추가한다.

```js
const {ApolloServer} = require('apollo-server');

const typeDefs = `
type Query {
  totalPhotos : Int!
  }
  `
const resolves = {
  Query:{
    totalPhotos: ()=>42
  }
}

const server = new ApolloServer({
  typeDefs, resolvers
})

server.listen().then({url}) => console.log(`GraphQL Service running on ${url}`)
```

6. 시작하기

```
npm run start
```

[GraphQL 공식문서](https://graphql.org/learn/)

> GraphQL은 <span style='color:red'>API용 쿼리 언어이며 데이터에 대해 정의한 유형 시스템을 사용하여 쿼리를 실행하기 위한 서버 측 런타임이다. </span>
> GraphQL은 특정 데이터베이스나 스토리지 엔진에 연결되어 있지 않으며 대신 기존 코드와 데이터로 뒷받침된다.
> GraphQL 서비스는 해당 유형의 유형과 필드를 정의한 다음 각 유형의 각 필드에 대한 기능을 제공하여 생성된다.

---

## Queries and Mutations 쿼리 및 변형

- 쿼리와 결과의 형태 동일하다.

```
{person(personID:"1"}{name}}
// personID는 1번을 요청, person은 name을 가져옴.

```

- 쿼리에 주석 추가할 수 있다.

---

- 쿼리의 필드는 객체를 참조할 수 있다. (다중콜을 하나로)

```js
{ person(personID: "1") { name
filmConnection { edges { node { title } }
```

- Arguments 인자 = personID
- personID로 특정 데이터를 가져올 수 있다.

---

### Arguments 인수

- REST와 같은 시스템에서는 단일 인수 집합(요청의 쿼리 매개변수 및 URL 세그먼트)만 전달할 수 있다.
- 그러나 GraphQL에서는 모든 필드와 중첩된 객체가 고유한 인수 집합을 얻을 수 있으므로 GraphQL을 여러 API 가져오기를 완전히 대체할 수 있다.
- 모든 클라이언트에서 개별적으로가 아니라 서버에서 한 번만 데이터 변환을 구현하기 위해 인수를 스칼라 필드에 전달할 수도 있다.

```js
//열거형 타입
{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}


{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 5.6430448
    }
  }
}
```

---

### Alias 별칭

- <span style='color:red'>쿼리의 필드 이름이 같은데 인자를 다르게 조회하고 싶은 경우 </span>
- 예리한 눈을 가진 경우 결과 개체 필드가 ​​쿼리의 필드 이름과 일치하지만 인수가 포함되지 않기 때문에 _**다른 인수를 사용하여 동일한 필드를 직접 쿼리할 수 없다는 것을 눈치채셨을 것입니다. 이것이 별칭이 필요한 이유이다.**_
- 별칭 을 사용하면 필드 결과의 이름을 원하는 이름으로 바꿀 수 있다.

### fragments

- <span style='color:red'> **GraphQL에는 fragments 라는 재사용 가능한 단위가 포함되어 있다.**</span>
- 조각을 사용하면 필드 집합을 구성한 다음 필요한 쿼리에 포함할 수 있다.
- 필드가 반복되면 위의 쿼리가 얼마나 반복되는지 알 수 있다.
- 프래그먼트의 개념은 복잡한 애플리케이션 데이터 요구 사항을 더 작은 청크로 분할하는 데 자주 사용된다.
- 특히 여러 UI 구성 요소를 다른 프래그먼트와 결합하여 하나의 초기 데이터 가져오기로 결합해야 할 때 그렇다.

### Variables 변수

- 지금까지 쿼리 문자열 안에 모든 인수를 작성했다. 그러나 대부분의 응용 프로그램에서 필드에 대한 인수는 동적이다.
- 예를 들어 관심 있는 스타워즈 에피소드, 검색 필드 또는 필터 집합을 선택할 수 있는 드롭다운이 있을 수 있다.

- 이러한 동적 인수를 쿼리 문자열에 직접 전달하는 것은 좋은 생각이 아니다.
- 그러면 클라이언트 측 코드가 런타임에 쿼리 문자열을 동적으로 조작하고 GraphQL 관련 형식으로 직렬화해야 하기 때문이다.
- 대신 GraphQL에는 쿼리에서 동적 값을 인수분해하고 별도의 사전으로 전달하는 일급 방법이 있습니다.
- 이러한 값을 <span style='color:red'> 변수 </span>라고 한다 .

#### <정리>

- 쿼리는 문자열로 전달된다.
- 동적으로 쿼리를 조회할 필요가 있음
- 동적 값을 별도로 전달할 방법인 '변수' 제공(기본값 할당 가능)

- 변수 작업을 시작할 때 세 가지 작업을 수행해야 한다.
- 쿼리의 정적 값을 다음으로 바꾼다.
  - $variableName
  - $variableName 쿼리에서 허용하는 변수 중 하나로 선언
  - variableName: value 별도의 전송 관련(일반적으로 JSON) 변수 사전 전달

```js
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}


{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

---

### Directives 지시문

- <span style='color:red'> 인수에 변수를 전달하면 이러한 문제의 꽤 큰 부류가 해결되지만 변수를 사용하여 쿼리의 구조와 모양을 동적으로 변경하는 방법도 필요할 수 있다. </span>
- 예를 들어, 요약 및 상세 보기가 있는 UI 구성요소를 상상할 수 있습니다.
- 여기서 하나는 다른 것보다 더 많은 필드를 포함한다. = if문 사용 가능

```js
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}


{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```

- @include(if: Boolean)인수가 인 경우에만 결과에 이 필드를 포함true.
- @skip(if: Boolean)인수가 인 경우 이 필드를 건너뜀 true.

---

## GraphQL 기본 2

### Mutation 뮤테이션

- _**REST에서 모든 요청은 결국 서버에 일부 부작용을 일으킬 수 있지만 규칙에 따라 GET데이터 수정 요청을 사용하지 않는 것이 좋다. GraphQL도 유사하다. 기술적으로 모든 쿼리를 구현하여 데이터 쓰기를 유발할 수 있다. 그러나 쓰기를 유발하는 모든 작업은 돌연변이를 통해 명시적으로 보내야 한다는 규칙을 설정하는 것이 유용하다.**_

- 쿼리와 마찬가지로 변형 필드가 객체 유형을 반환하면 중첩 필드를 요청할 수 있다. 이것은 업데이트 후 개체의 새 상태를 가져오는 데 유용할 수 있다.

#### Apollo garphql studio

- 좀 더 편리한 기능들을 줌.

- schema query 등

```js
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}

{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}

{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}
```

### Multiple fields in mutations 뮤테이션의 여러 필드

- 돌연변이는 쿼리와 마찬가지로 여러 필드를 포함할 수 있다. 쿼리와 변형 사이에는 이름 외에 한 가지 중요한 차이점이 있다.
- **<span style='color:red'>쿼리 필드가 병렬로 실행되는 동안 돌연변이 필드는 차례로 차례로 실행된다.</span>**

- 왜? 데이터이기 때문에,수정, 삭제 등을 같이하면서 에러가 발생할 수 있기 때문에.

- 즉, 한 요청에서 두 개의 돌연변이를 보내는 경우 incrementCredits첫 번째는 두 번째가 시작되기 전에 완료되도록 보장되어 우리 자신과의 경쟁 조건으로 끝나지 않도록 한다.

### Inline Fragments

- 인터페이스나 유니언 타입을 반환하는 필드의 경우,
- 인라인 프래그먼트를 통해 데이터를 타입에 맞춰 받을 수 있음
- ... on [타입] { ...
- }

## Meta fields

### \_\_typename

- GraphQL을 사용하면 쿼리의 어느 지점에서나 메타 필드인 **typename 을 요청하여 그 시점에서 객체 타입의 이름을 얻을 수 있다.**
- typename 필드가 없으면 클라이언트가 다른 타입을 구별하는 것은 불가능할 것이다.

### Introspection

- GraphQL 서비스는 몇 가지 메타 필드를 제공하며, 나머지는 Introspection 시스템을 노출하는 데 사용된다.

### Apollo

> 스키마 & 타입
>
> > https://graphql.org/learn/schema/ >> https://graphql-kr.github.io/learn/schema/

> 객체 타입과 필드
>
> > GraphQL 스키마의 가장 기본적인 구성 요소는 객체 타입입니다.
> > 객체 타입은 서비스에서 가져올 수 있는 객체의 종류와 그 객체의 필드를 나타냅니다.
> > GraphQL 스키마 언어에서는 다음과 같이 표현할 수 있습니다.

```ts
type Character {
  name: String!
  appearsIn: [Episode]!
}
```

- `Character` 는 `GraphQL` 객체 타입 입니다. 즉, 필드가 있는 타입입니다.
- 스키마의 대부분의 타입은 객체 타입입니다.
- `name` 과 `appearIn` 은 `Character` 타입의 필드 입니다.
- 즉 name 과 appearIn 은 GraphQL 쿼리의 Character 타입 어디서든 사용할 수 있는 필드입니다.
- `String` 은 내장된 스칼라 타입 중 하나입니다.
- 이는 스칼라 객체로 해석되는 타입이며 쿼리에서 하위 선택을 할 수 없습니다.
- 스칼라 타입은 나중에 자세히 다룰 것입니다.
- `String!` 은 필드가 non-nullable 임을 의미합니다.
- 즉, 이 필드를 쿼리할 때 GraphQL 서비스가 항상 값을 반환한다는 것을 의미합니다.
- 타입 언어에서는 이것을 느낌표로 나타냅니다.
- `[Episode]!` 는 Episode 객체의 배열(array) 을 나타냅니다.
- 또한 non-nullable 이기 때문에 appearIn 필드를 쿼리할 때 항상(0개 이상의 아이템을 가진) 배열을 기대할 수 있습니다.

> 인자
>
> > GraphQL 객체 타입의 모든 필드는 0개 이상의 인수를 가질 수 있습니다

```ts
type Starship {
  id: ID!
  name: String!
  length(unit: LengthUnit = METER): Float
}
```

| GraphQL 기본       |                                          |
| ------------------ | ---------------------------------------- |
| 쿼리               | 요청, 결과 동일 / 주석 / 작업(타입/이름) |
| 쿼리               | 필드 객체 참조(다중콜X) / 인자 / 별칭    |
| Fragment           | 반복되는 필드셋 / 변수 전달가능          |
| 변수 / 지시어      | 동적쿼리 방법 / @include @skip           |
| 뮤테이션           | 데이터의 수정을 가하는 방법              |
| Apollo graphQL     | 다양한 기능이 추가된 라이브러리          |
| 뮤테이션 다중 필드 | 순차 실행 (쿼리는 병렬)                  |
| 인라인 프래그먼트  | interface / union 일때 사용              |
| 타입 시스템        | 객체 타입과 필드                         |
| 특별한 타입        | 쿼리 타입 / 뮤테이션 타입                |
| 스칼라 타입        | 구체적 데이터                            |
| 기타               | 인터페이스 / 유니온 / 인풋               |
