## SCSS

## Part.06

#### 왜 굳이 SCSS 를 사용해야 하는가 ?

1. 중첩 기능이 제공된다.
2. 색상 지정시, 변수를 통해 색상을 재사용 가능하다.

#### 주석 처리

- // : 변환된 후에는 주석의 내용이 사라짐
- /\*\*/: 변환(컴파일, CSS로)된 후에도 주석이 남아 있음

<a href="https://www.sassmeister.com/">SCSS변환</a>

#### 중첩 & 상위(부모) 선택자 참조

```scss
.fs {
  &-small {
    font-size: 20px;
  }
  &-medium {
    font-size: 30px;
  }
  &-large {
    font-size: 40px;
  }
}
```

#### 변수 재활용이 가능하다

```scss
$color: tomato;
$size: 100px;
```

#### 산술 연산

```scss
.box1 {
  border: 1px solid black;
  width: 20px + 20px; // 40px
  height: 30px - 10px; // 30px
  font-size: 10px * 2; // 20px
  margin: 30px / 2; // 적용 안됨 30px  / 는 font 에서 size / line-height 에 사용됨
  // ( 30px / 2 ) = 15px 은 적용됨, 다른 산수연산자와 함께 사용,  혹은 변수에 할당하면 됨.
  padding: 20px % 7; // 6px
}

.box2 {
  background-color: cornflowerblue;
  width: calc(100% - 200px);
  height: 100px;
  margin: 10px 0;
}
```

#### 재활용 Mixis

```scss
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container2 {
  background-color: aqua;
  @include center;
  .item {
    @include center;
    background-color: chocolate;
  }
}

// 기본값 지정도 가능하다

@mixin box($size: 100px, $color: pink) {
  width: $size;
  height: $size;
  background-color: $color;
}

.container3 {
  @include box(200px);
  margin-top: 10px;
  .item {
    // 키워드 인수 ( 인수가 순서대로 적용 되기때문에) 사용
    @include box($color: green);
  }
}
```

#### 함수

```scss
@function ratio($size, $ratio) {
  @return $size * $ratio;
}

.box3 {
  $width: 160px;
  width: $width;
  height: ratio($width, 2);
  @include center;
  background-color: gold;
}
```

#### 색상 내장 함수

- mix(a, b): 두 가지 색상을 섞음
- lighten(a, b%): 해당 색상을 % 만큼 밝게함
- darken(a, b%): 해당 색상을 % 만큼 어둡게 함
- saturate(a, b%): 해당 색상을 % 채도를 높여줌
- desaturate(a, b%): 해당 색상을 % 채도를 낮춰줌
- grayscale(a): a의 회색
- invert(a): a의 색상을 반전 시킴
- rgba(a, b): a의 색상에 b 만큼 투명도 적용 시킴

#### 가져오기

```scss
@import './sub', './sub2';
```

#### 데이터 종류

```scss
$number: 1; // .5, 100px, 1em
$string: bold; // relative, "../images/..."
$color: red; // blue, #FFFF00, rgba(0, 0, 0, 1)
$boolean: true; // false
$null: null;
$list: orange, royalblue, yellow;
$map: (
  o: orange,
  r: royalblue,
  y: yellow,
);
```

###### 적용 예제 & 반복문

```scss
@for $i from 1 through 5 {
  .box3:nth-child(#{$i}) {
    width: 100px * $i;
  }
}

@each $c in $list {
  .box5 {
    color: $c;
  }
}

@each $key, $value in $map {
  .box-#{$key} {
    color: $value;
  }
}
```
