## JavaScript Level up

## Part. 4

### 정규표현식 RegExp (Regular Expression)

> 정규표현식이란 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)이다.
>
> > 생성자 함수 방식
> > RegExp 함수 호출
> > 리터럴 (Literal) 방식
> > / 로 감싸진 패턴을 사용

#### 역할

- 문자 검색 (search)
- 문자 대체 (replace)
- 문자 추출 (extract)

#### 테스트 사이트

https://regexr.com/

##### 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi");

// 리터럴
/* /표현/옵션
 /[a - z]/gi */
```

- 예제 문자

```js
const str = `
010-1234-6758
thefatcam@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

const regexp = new RegExp("the", "gi");
const regexp = /the/gi;
console.log(str.match(regexp));
// output:  ['the', 'The', 'the']
const regexp = /fox/gi;
console.log(regexp.test(str)); // true
console.log(str.replace(regexp, "AAA"));
// output: The quick brown AAA jumps over the lazy dog
```

##### 메소드

| 메소드  | 문법                               | 설명                             |
| ------- | ---------------------------------- | -------------------------------- |
| test    | `정규식.test(문자열)`              | 일치 여부(Boolean) 반환          |
| match   | `문자열.macth(정규식)`             | 일치하는 문자의 배열(Arrary)반환 |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체             |

##### 플래그 (옵션)

| 플래그 | 설명                                         |
| ------ | -------------------------------------------- |
| g      | 모든 문자 일치(global)                       |
| i      | 영어 대소문자를 구분 않고 일치 (ignore case) |
| m      | 여러 줄 일치 (multi line)                    |

```js
console.log(str.match(/\.$/gim));
// output ['.']
```

##### 패턴 (표현)

| 패턴       | 설명                               |
| ---------- | ---------------------------------- |
| ^ab        | 줄(Line) 시작에 있는 ab와 일치     |
| ab$        | 줄(Line) 끝에 있는 ab와 일치       |
| .          | 임의의 한 문자와 일치              |
| a&verbar;b | a 또는 b와 일치                    |
| ab?        | b가 없거나 b와 일치                |
| {3}        | 3개 연속 일치                      |
| {3,}       | 3개 이상 연속 일치                 |
| {3,5}      | 3개 이상 5개 이하(3~5개) 연속 일치 |

```js
str.match(/^t/gim); // ['d']
str.match(/d$/gm); // ['t', 'T']
str.match(/h..p/g); // ['http', 'http']
str.match(/fox|dog/);
str.match(/dog|fox/);
// ['fox', index: 101 : 첫 번째로 찾는 것을 반환 하기때문에 결과가 같음
str.match(/https?/g); //  ['https', 'http']
str.match(/\b\w{2,3}\b/g);
// ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog', 'com']
```

| 패턴    | 설명                                                 |
| ------- | ---------------------------------------------------- |
| [abc]   | a 또는 b 또는 c                                      |
| [a-z]   | a 부터 z 사이의 문자 구간에 일치(영어 소문자)        |
| [A-z]   | A 부터 Z 사시의 문자 구간에 일치(영어 대문자)        |
| [0-9]   | 0부터 9 사이의 문자 구간에 일치(숫자)                |
| [가-힝] | 가부터 힣 사이의 문자 구간에 일치(한글)              |
| \w      | 63개 문자(Word, 대소영문52개 + 숫자10개 + \_)에 일치 |
| \b      | 63개 문자에 일치하는 않는 문자 경계(Boundary)        |
| \d      | 숫자(Digit)에 일치                                   |
| \s      | 공백(Space, Tab 등)에 일치                           |

```js
const str = `
010-1234-6758
thefatcam@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://naver.com
동해물과_백두산이 마르고 닳도록
`;

str.match(/[fox]/g);
// ['f', 'o', 'o', 'o', 'f', 'o', 'o', 'f', 'o', 'x', 'o', 'o', 'o']
str.match(/[0-9]{1,}/g);
// ['010', '1234', '6758', '7035', '60']
str.match(/[가-힣]{1,}/g);
// ['동해물과', '백두산이', '마르고', '닳도록']
str.match(/\bf\w{1,}\b/g);
// ['frozen', 'fox']
str.match(/\d{1,}/g);
//['010', '1234', '6758', '7035', '60']

const h = `  the hello  world   !

`;
h.replace(/\s/g, ""); // thehelloworld!
```

| 패턴  | 설명                   |
| ----- | ---------------------- |
| (?=)  | 앞쪽 일치 (Lookahead)  |
| (?<=) | 뒤쪽 일치 (Lookbehind) |

```js
str.match(/.{1,}(?=@)/g); // ['thefatcam']
str.match(/(?<=@).{1,}/g); // ['gmail.com']
```
