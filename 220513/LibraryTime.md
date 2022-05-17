## React 라이브러리

## Part 2 - ch 01. 라이브러리 기초

#### 라이브러리란

| 라이브러리                   | 프레임워크             |
| ---------------------------- | ---------------------- |
| 개발 편의를 위한 도구의 모음 | 기반 구조까지 잡혀있음 |
| 공구                         | 공장                   |

> 리액트는 **도구** 모음
>
> > JSX, 컴포넌트의 상태관리, 렌더링 최정화, 성능확인
> > 그 외에도 필요한 것들이 많음
> > 이미 잘 만들어둔 도구들을 가져다가 쓰면서 **리액트 생태계**의 이점을 누리자

- 라이브러리 적용과정
- 필요 > 검색 > 사용법 파악 > 적용
  - **필요**
  - 특정 기능이 필요해짐 (직접 구현하기에는 조금 벅참)
  - 더 나은 도구가 필요해짐
  - 트렌드에 따른 새로운 기술에 대한 호기심
  - **검색**
  - 필요 그대로 검색
  - github, npm trends, 프론트엔드 커뮤니티, 기술 블로그
  - 유사한 라이브러리들을 후보로 비교 (기능, 성능, 사이즈, 인기, 최신, 등...)
  - **사용법파악**
  - 공식 문서
  - github 코드 검색 (실제 용례)
  - 기술 블로그의 적용하기 예제
  - **적용**
  - POC (Proof of concept)
  - 프로젝트 일부에 적용
  - 프로젝트 전체에 적용

##### 다루게 될 라이브러리들

- Date 관련 (날짜표기, 계산도구)
- 스타일링 관련 (스타일링을 조금 더 편하게 도와주는 도구)
- 디자인 UI 관련 (미리 해둔 스타일일을 제공하는 도구)
- 애니메이션 관련 (애니메이션 기능을 미리 구현해두고 제공하는 도구)
- 모킹 관련 (데이터 페칭을 대체해주는 도구)
- 상태 관리 관련 (컴포넌트의 상태 관리를 도와주는 도구)
- 데이터 페칭 관련 (네트워크 통신을 도와주는 도구)
- GraphQL (REST api를 대체하는 도구)
- Next.js (SRR 등 최신 프론트엔드 기술을 제공해주는 도구)

**사용법을 익히기보다는 찾고! 적용하는 과정을 익히자**

---

#### Moment (Time / Date 라이브러리)

[Moment](https://momentjs.com/)

- 설치하기
- `npm install moment`
- `npm install moment-timezone`
  <br/>
- 연습예제
- 뉴욕시간대에서
  - 2018년 3월 10일 13시에 하루 더하기
  - 2018년 3월 10일 13시에 24시간 더하기
- 한국 시간대에서
  - 2017년 1월 1일에 1년 빼기
  - 2017년 1월 1일에 365일 빼기

```jsx
//MomentExample.jsx
import React, { useRef, useState } from "react";
// import moment from 'moment';
import moment from "moment-timezone";
import "moment/locale/ko";

export default function MomentExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");
  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div>{momentDate.format()}</div>
      <br />
      <div>{newMomentDate.format()}</div>
      <br />
      <div>{cloneNewMomentDate.format()}</div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기:
        {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
      </div>
      <br />
      <div>Leap year(Korea)</div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {moment("2017-01-01").subtract(1, "year").format()}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기:
        {moment("2017-01-01").subtract(365, "day").format()}
      </div>
      <br />
      <div>한국어로 표기 (05-16-2022를 2022년 5월 16일로 표기)</div>
      <div>{moment("05-16-2022").format("YYYY년 M월 DD일")}</div>
      <br />
      <div>두 날짜가 비교</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
      <div>
        {`${moment("2021-07-17 03:00").diff(moment("2021-07-18 02:00"), "hours")}
        시간`}
      </div>
      <br />
    </div>
  );
}
```

###### 최근 트렌드에서는 선호하지 않는다 (크기가 너무 크다)

#### Dayjs

[Dayjs](https://day.js.org)

- 설치하기
- `npm install dayjs`

```jsx
// DayjsExample.jsx
import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// 한국어 가져오기
dayjs.locale("ko");
// time zone 적용하기
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayjsExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.add(1, "week");
  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <div>{dayjsDate.format()}</div>
      <br />
      <div>{newDayjsDate.format()}</div>
      <br />
      <div>{cloneNewDayjsDate.format()}</div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>{dayjs.tz.guess()}</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {dayjs.tz("2018-03-13 13:00:00", "America/New_York").add(1, "day").format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기:
        {dayjs.tz("2018-03-13 13:00:00", "America/New_York").add(24, "hour").format()}
      </div>
      <br />
      <div>Leap year(Korea)</div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {dayjs("2017-01-01").subtract(1, "year").format()}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기:
        {dayjs("2017-01-01").subtract(365, "day").format()}
      </div>
      <br />
      <div>한국어로 표기 (05-16-2022를 2022년 5월 16일로 표기)</div>
      <div>{dayjs("05-16-2022").format("YYYY년 M월 DD일")}</div>
      <br />
      <div>두 날짜가 비교</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
      <div>
        {`${dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"), "hours")}
        시간`}
      </div>
      <br />
    </div>
  );
}
```

- 가볍다
- 문서도 정갈
- 간단한 기능들을 적용할 때는 좋을 듯
- 써보다가 필요한 기능이 추가로 있다면 다른 라이브러리 고려해봄직

#### Date-fns

[Date-fns](https://date-fns.org/)

- 설치하기
- `npm install date-fns`
- `npm install date-fns-tz`

```jsx
// DateFnsExample.jsx
import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { add, format, sub, differenceInHours } from "date-fns";
import { format as timezoneFormat, toDate } from "date-fns-tz";
import addWeeks from "date-fns/addWeeks";
import { ko } from "date-fns/locale";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DateFnsExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };

  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const newDateFnsDate2 = addWeeks(newDateFnsDate, 1);
  return (
    <div>
      <h1>Date-fns</h1>
      <div>Immutable Check</div>
      <div>{format(dateFnsDate, "yyyy-MM-dd")}</div>
      <br />
      <div>{format(newDateFnsDate, "yyyy-MM-dd")}</div>
      <br />
      <div>{format(newDateFnsDate2, "yyyy-MM-dd")}</div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {timezoneFormat(add(new Date("2018-03-10 13:00:00"), { days: 1 }), "yyyy-MM-dd HH:mm:ssXXX", {
          timeZone: "America/New_York",
        })}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기:
        {timezoneFormat(
          add(
            toDate(new Date("2018-03-10 13:00:00"), {
              timeZone: "America/New_York",
            }),
            { hours: 24 }
          ),
          "yyyy-MM-dd HH:mm:ssXXX",
          {
            timeZone: "America/New_York",
          }
        )}
      </div>
      <br />
      <div>Leap year(Korea)</div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기:
        {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
      </div>
      <br />
      <div>한국어로 표기 (05-16-2022를 2022년 5월 16일로 표기)</div>
      <div>{format(new Date("05-16-2022"), "yyyy년 MM월 dd일")}</div>
      <br />
      <div>두 날짜가 비교</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
      <div>
        {`${differenceInHours(new Date("2021-07-17 03:00"), new Date("2021-07-18 02:00"))}
        시간`}
      </div>
      <br />
    </div>
  );
}
```

```js
// App.js
import MomentExample from "./components/Moment/MomentExample";
import DayjsExample from "./components/Dayjs/DayjsExample";
import DateFnsExample from "./components/DateFns/DateFnsExample";

function App() {
  return (
    <div>
      <DateFnsExample />
      <DayjsExample />
      <MomentExample />
    </div>
  );
}

export default App;
```

#### 라이브러리를 고르는 기준

> 라이브러리란?
>
> > 라이브러리: 공구, 도구
> > 라이브러리 도입과정: 필요 > 검색 > 사용법 파악 > 적용
> > 사용법을 익히기 보다는 \*\*찾고 / 적용하는 과정을 익히자

> Moment
>
> > 타임존: moment / timezone
> > Format / 비교: 원하는 스타일로 표기 가능
> > 오래됨: Mutable, Tree shaking X

> Day.js
>
> > 타임존: plugin / timezone plugin/utc
> > Format / 비교: 원하는 스타일 표기 가능
> > 가벼움: Tree shaking X
> > 가벼운게 최우선일 경우 선택!

> date-fns
>
> > 타임존: date-fns-tz
> > Format / 비교: 원하는 스타일 표기 가능
> > 포괄적인: Immutable , Tree shaking 까지
> > 함수별 import: 가능 ex, addWeeks
> > FP패러다임을 따르거나 tree-shaking이 필요하다면 선택!

> 라이브러리를 선택하는데 도움을 주는 도구들
>
> > [사이즈](https://bundlephobia.com) > > [인기](https://www.npmtrends.com/date-fns-vs-dayjs-vs-luxon-vs-moment) > > [기능/성능](https://github.com/you-dont-need/You-Dont-Need-Momentjs/blob/master/README.md)
