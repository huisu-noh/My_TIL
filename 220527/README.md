## Next.js

## Ch. 08 심화

- nextJS 는 <Link> 를 to 가 아니라 href 로 받는다

```jsx
<Link href="/"><Link>
```

- 고정 된 스타일을 사용하기 위해서는 Layout component 를 따로 만들어서 app.js 에 적용한다.
- 최상위 컴포넌트에 적용

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

#### 백엔드 데이터와 연결되었을 때?

- 페이지가 렌더링 될 때, HTTP 요청을 보내려면, 이를 처리하기 위해 일반적으로 usrEffect 훅을 사용한다.

```js
function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
```

## 정적 페이지에 대한 데이터 가져오기 (Page Pre-Rendering)

### 정적인 생성 (일반적으로 사용하는 접근법)

- 정적 생성에서 페이지 컴포넌트가 사전 렌더링 되는 시점은 애플리케이션을 빌드하거나 Next 프로젝트를 빌드하는 시점이다
- 즉, 프로덕션용으로 빌드하는 시점이다.
- 정적 생성에서는 기본적으로 요청이 서버에 도달 했을 때 서버에서 즉각적으로 페이지를 사전 렌더링하지 않는다.
- 대신 개발자가 프로덕션용 사이트를 빌드할 때 사전 렌더링을 한다.

```js
// props 로 받기 때문에 더이상 Hook이 필요 없다.
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// 비동기
// 여기 작성된 코드는 클라이언트 측에 들어가지 않기 때문에,
// 클라이언트 측에서 절대 실행되지 않는다.
// 이 코드는 빌드 프로세스 중에 실행되기 때문이다.
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
```

### 정적 사이트 생성 (SSG) 에 대한 추가 정보

- `npm run build` 생성하기
- 터미널에 관련 내용이 나옴
- `● (SSG) automatically generated as static HTML + JSON (uses getStaticProps)`
