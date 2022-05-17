## React 라이브러리

## Part 2 - ch 07. 스타일링 라이브러리 정리

#### Styled-components

| styled-components         |                              |
| ------------------------- | ---------------------------- |
| CSS in JS                 | CSS의 문제점을 해소하기 위함 |
| 해결책                    | 스타일을 style태그로 분리    |
| 사용법(template literals) | styled.{element}             |
| styled(스타일드 컴포넌트) | 상속                         |
| &                         | 가상 엘리먼트 / 가상 선택자  |
| Global Style              | 전역스타일                   |
| attrs                     | props addition               |
| keyframes / ThemeProvider | Animation / Theme            |

#### Emotion

| emotion           |                                          |
| ----------------- | ---------------------------------------- |
| react             | 특화된 @emotion/react                    |
| css props         | jsx를 대체함                             |
| styled components | styled-component + @                     |
| composition       | css 안에서 css 사용(자기복제, 확장 가능) |
| 기능              | fallbacks, &, Global, keyframes          |
| styled-components | 서로 점점 유사해짐                       |
| trend             | emotion이 우세한듯                       |
| 사이즈 / 속도     | emotions이 우세한듯                      |

#### Sass

| sass              |                                     |
| ----------------- | ----------------------------------- |
| 전처리기          | CSS의 확장                          |
| Sass / Scss       | 보다 CSS와 유사한 SCSS              |
| 사용              | varibales/ modules / mixin / extend |
| syntax            | 언어처럼 자체 syntax가 있음         |
| interpolation     | #{} 값을 주입 (마치 `${}`)          |
| values/ functions | 프로그래밍 언어와 유사함            |

#### 라이브러리를 고르는 기준

| CSS의 문제점                 | (React를 쓰면서)                     |
| ---------------------------- | ------------------------------------ |
| Global Namespace             | 글로벌 변수를 지양해야하는 JS와 대치 |
| Dependencies                 | css간의 의존관리                     |
| Dead Code Elimination        | 안쓰는 CSS인지 어려움                |
| Minification                 | 클래스 이름 최소화                   |
| Sharing Constants            | JS의 코드와 값을 공유하고 싶음       |
| Non-deterministic Resolution | css 파일 로드 타이밍 이슈            |
| Isolation                    | 격리                                 |

##### 어떤 라이브러리를 선택할 지는 개발자(본인)에게 달려있음

> 경험
>
> > 반응형 웹을 대응하기 위해 media query를 많이 쓰고  
> > 딱히 design system이 없던 곳에서 sass를 썼음
> > **지금은 개발 편의성을 생각하면 CSS in JS를 쓸듯, emotion**
