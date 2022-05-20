## GraphQL 심화

## Ch. 07

### [Apollo GraphQL](https://www.apollographql.com/)

- Platform unifies GraphQL

<img src="https://www.apollographql.com/docs/c5e2d4db4b0b5568a87ebf082ffe79e6/frontend_backend_diagram.svg">

### Get started with Apollo Server

1. Create a new project

- `mkdir graphql-server-example`
- `cd graphql-server-example`
- `npm init --yes`

2. Install dependencies

- `npm install apollo-server graphql`
- `touch index.js`

3. Define your GraphQL schema

```js
const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
```

4. Define your data set

```js
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
```

5. Define a resolver

```js
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};
```

6. Create an instance of ApolloServer

```js
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
```

7. Start the server

- `node index.js`
- `🚀 Server ready at http://localhost:4000/`

8.  Execute your first query

- `http://localhost:4000`

<img src="https://www.apollographql.com/docs/db1146d295220a862a1374847b4a1d43/as-landing-page.jpg">

- 데이터 소스 연결 (SQLite by use Sequelize - ORM)
- Object Relational Mapping DB와 데이터를 매핑해주는 도구
- Sequelize
- https://sequelize.org/
- https://github.com/sequelize/sequelize

| GraphQL 심화   |                                          |
| -------------- | ---------------------------------------- |
| Apollo GraphQL | 프론트와 서버를 모두 제공하는 라이브러리 |
| GraphQL 서버   | apollo-server graphql                    |
| 스키마         | 프론트와 쉐어할 데이터 구조              |
| 데이터 소스    | REST API (기본 캐싱 O) / DB (캐싱 X )    |

---

### GraphQL 심화 2

- 리졸버 : Data나 Promise를 반환
- (parent,args, `context`, info)

[리졸버](https://www.apollographql.com/tutorials/fullstack-quickstart/writing-query-resolvers)

- 기본 리졸버
- missionPatch(size: SMALL)

![Default Resolver Logic](https://res.cloudinary.com/apollographql/image/upload/e_sharpen:50,c_scale,q_90,w_1440,fl_progressive/v1648135104/odyssey/fullstack-tutorial/Default_Resolver_Logic_Diagram_jypdhc.png)

- 페이지네이션
- [뮤테이션 리졸버](https://www.apollographql.com/tutorials/fullstack-quickstart/writing-mutation-resolvers)

- 예약

- [SQLite vscode extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)

- 데이터확인

| Apollo studio connect |                            |
| --------------------- | -------------------------- |
| 리졸버                | 쿼리 요청에 대한 응답 생성 |
| 페이지네이션          | 서버 부하를 줄임           |
| `뮤테이션` 리졸버     | `로그인`/예약              |
| SQLite                | 데이터 축적됨              |

---

### GraphQL 심화 3

- [프론트엔드를 GraphQL 서버와 연결](https://www.apollographql.com/tutorials/fullstack-quickstart/setting-up-apollo-client)
  <br/>

  ![image](https://res.cloudinary.com/apollographql/image/upload/e_sharpen:50,c_scale,q_90,w_1440,fl_progressive/v1648235247/odyssey/fullstack-tutorial/space-explorer_jgpsfi.png)

- [Fetching data with queries](https://www.apollographql.com/tutorials/fullstack-quickstart/fetching-data-with-queries)

- LAUNCH LIST

- fragment LAUNCH_TILE_DATA
- typescript라서 **generated** 사용
- useQuery에서 data, loading, error활용(인자로 )

- 페이지네이션
- fetchMore 사용
- 동작시키려면 cache부분 수정 필요
- 뮤테이션(Login)

- [Updating data with mutations](https://www.apollographql.com/tutorials/fullstack-quickstart/updating-data-with-mutations)

- [Managing local state](https://www.apollographql.com/tutorials/fullstack-quickstart/managing-local-state)

| 정리                  |                                 |
| --------------------- | ------------------------------- |
| 프론트엔드 연결       | ApolloClient                    |
| useQuery              | data, loading, error            |
| 페이지네이션/캐시     | fetchMore / InMemoryCache       |
| useMutation / makeVar | 뮤테이션/ client 로컬 상태 관리 |
