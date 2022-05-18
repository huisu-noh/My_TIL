## React 라이브러리

## Part 2 - ch 05 ch 06 sass

- 전에 css를 사용할 때 불편했던 점들을 확장기능을 이용해 해결하고 효율적으로 작성할 수 있도록 도와주는 프로그래밍 언어
- css 전처리기(preprocessing)

#### Variables

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}

// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

- scss는 css와 sass를 합쳐놓은것.
- 앞에 $표시를 줘서 변수처럼 사용.
- 계속 확장 되더라도 코드를 간결하게 쓸 수 있다.
- 위에서 import 한번만 작성 해주고 계속해서 중복 사용 가능

#### Nesting

```
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

- 명시적으로 작성 가능.
- css처럼 nav안에 각각 태그를 지정하지 않아도, nav만 지정하고 그 안에서 자유롭게 태그 지정이 가능하다.

#### Modules

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}

// _base.sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color

```

- 기존 베이스를 만들어 놓고, 원래는 css에서 모아서 한번에 다 합쳐져야할 것을 나눠서 사용 가능.
- scss파일을 만들고, 다른 파일에서 @use이용해서 불러올 수 있게하여 가져다 쓸 수 있음.

#### Mixins

```scss
@mixin theme($theme: DarkGray) background: $theme box-shadow: 0 0 1px rgba($theme, 0.25) color: #fff .info @include
  theme .alert @include theme($theme: DarkRed) .success @include theme($theme: DarkGreen);
```

- 변수를 받고 변수를 스타일처럼 이용,그래서 중복을 없애줌.
- @mixin은 타입이 지정가능, @include로 가져다 씀.

#### Extend / Inheritance

```scss
/* This CSS will print because %message-shared is extended. */
%message-shared
  border: 1px solid #ccc
  padding: 10px
  color: #333


// This CSS won't print because %equal-heights is never extended.
%equal-heights
  display: flex
  flex-wrap: wrap


.message
  @extend %message-shared


.success
  @extend %message-shared
  border-color: green


.error
  @extend %message-shared
  border-color: red


.warning
  @extend %message-shared
  border-color: yellow
```

- 기본 css를 가지고 있고,계속 추가하는 방식으로 css 스타일을 확장 가능
- %로 표시, @extend로 가져다 씀.

#### Operator

```scss
@use "sass:math" .container display: flex article[role= "main" ] width: math.div(600px, 960px) * 100% aside[role=
  "complementary" ] width: math.div(300px, 960px) * 100% margin-left: auto;
```

- "+" ,"-", \* , / , % 연산 가능

#### if문,if else문 , for문, while문 등 사용이 가능하다

#### @import

```scss
// foundation/_code.scss
code {
  padding: 0.25em;
  line-height: 0;
}
// foundation/_lists.scss
ul,
ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}
// style.scss
@import "foundation/code", "foundation/lists";

// Configuration
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
// style.scss
@use "library" with (
  $black: #222,
  $border-radius: 0.1rem
);
```

- scss파일을 생성해 코드를 완성하고, import해서 사용 가능
- mixin 시킨 것을 use를 사용해 불러올 수 있다.
- 변수를 사용해서 내가 원하는 값으로 바꿔서 사용 가능 (Configuration)

#### @use

- 모듈을 import할 때 사용 가능

#### @mixin

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}

nav ul {
  @include horizontal-list;
}
```

- mixin을 사용해서 미리 지정을 해주고, 아래 태그만 지정 후 scss 작성 가능.

#### @function

```scss
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```

- 4에 3승을 구하는 for문을 돌릴 수 있음.
- result에 곱한 값을 준다.

#### @error

```scss
@mixin reflexive-position($property, $value) {
  @if $property != left and $property != right {
    @error "Property #{$property} must be either left or right.";
  }

  $left-value: if($property == right, initial, $value);
  $right-value: if($property == right, $value, initial);

  left: $left-value;
  right: $right-value;
  [dir="rtl"] & {
    left: $right-value;
    right: $left-value;
  }
}

.sidebar {
  @include reflexive-position(top, 12px);
  //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Error: Property top must be either left or right.
}
```

- css에서도 에러가 나면 워닝을 줄 수 있음
