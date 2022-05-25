## Next.js

## Ch. 08

- React 기반의 프레임워크
- The React Framework for Production

### What is NextJS?

[NextJS](https://nextjs.org/)

### NextJS-Key Features & Benefits

> Server-side Rendering
>
> > 페이지 콘텐츠를 클라이언트가 아니라 전적으로 서버에서 준비하는 것

> File-based Routing
>
> > Routing: 사용자에게 여러 페이지가 있는 것처럼 착각하게 하는 것
> > 파일과 폴도를 이용해서 페이지와 라우트를 정의한다
> > 추가 코드를 작성 할 필요가 없으며, 코드를 적게 작성하면서 작업량을 줄일 수 있다.

> Fullstack Capabilities
>
> > Next / React 애플리케이션에 쉽게 백엔드 코드를 추가 할 수 있다.
> > 이런 방식으로 코드를 추가해서 데이터베이스나 파일에 데이터를 저장하거나
> > 거기에서 데이터를 받아오거나, 인증을 추가하는 등 모든 작업을 할 수 있다.

- Automatic Setup
- `npx create-next-app@latest`
- `yarn create next-app`

- 파일명에 [].js 대괄호를 넣으면 NextJS는 이것을 동적 페이지로 인식해서 경로에 여러 값을 불러온다.
- 싱글페이지를 유지할려면, Next 에서 제공하는 특수 컴포넌트를 활용해야 한다.
- `import {} from 'next/link';` : 링크를 담당하는 하위 패키지
- 새로운 HTML 페이지를 가져오지 않고도 이동할 수 있게 만든다.
- 이게 싱글페이지 애플리케이션이다.
- 사용된 코드 예시

```js
// index.js
// our-domain.com/

function HomePage() {
  return <h1>The Home Page</h1>;
}

export default HomePage;

// news 폴더에 index.js
// our-domain.com/news
import Link from 'next/link';
import { Fragment } from 'react/cjs/react.production.min';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>
          <Link href='/news/something-else'>Something Else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;


// news 폴더에 [newId].js
import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
```

- `_app.js` : 특수 파일
  - pages 폴더에서 바로 쓸 수 있다.
  - 파일이 없으면 직접 만들면 된다.
  - 마치 최상위 컴포넌트 같은 것이다.
  - NextJS 가 렌더링하는 최상위 컴포넌트처럼 작동한다.

```js
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

- 이렇게 하면 여러 페이지 콘텐츠가 이 Layout 컴포넌트 안에 들어가게 된다.
- 각각의 페이지 콘텐츠에 설정할 필요가 없다.
