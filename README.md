#### 노마드코더 REACT 기초 강의([ReactJS로 영화 웹서비스 만들기](https://nomadcoders.co/react-for-beginners/lobby))

___
### 2.1 Before React
* JS만으로 Counter만들기는 비효울적임(queryselector로 요소를 찾고, eventlistner를 각각 붙여줘야 함)

___
### 2.2 Our First React Element
* reactDOM은 React에서 만든 element를 html에 넣기 위한 라이브러리 
* html파일에 react를 script로 import 하고 코드를 작성할 수 있다.

___
### 2.3 Events in React
* React에서 Element를 생성할 때 2번째 인자로 Event Listener를 추가할 수 있다. (1번째인자는 이름, 3번째인자는 내용)

___
### 2.5 JSX
* JSX는 javascript를 React를 쓰기위해 변형한 문법
* babel을 통해서 JSX를 js코드로 변환할 수 있음

___
### 2.6 JSX part Two
* React Component는 이름이 대문자로 시작해야한다. 소문자로 적으면 React가 일반 tag로 생각한다.
* Component를 다른 Component 안에 삽입하려면 Component들을 함수 형태로 만든 다음에 태그를 통해 삽입한다.

___
### 3.0 Understanding State
* JS에서는 component.innerText 를 통해 요소를 수정하지만, JSX에서는 그저 변수를 중괄호에 넣는 것 만으로 수정 가능하다.
* 코드에서 eventlistner를 통해 counter 변수 값을 수정하는 일을 하고 있는데, 이렇게 하면 component를 render하는 함수는 아직 한번만 호출되므로, html화면에서 업데이트 되지 않는다. (state의 필요성)
* state를 사용하지 않고 화면을 update하려면 render함수를 호출해야한다.
* React는 일반 JS와 다르게 컴포넌트의 변화된 부분만 파악해서 바꿔주므로 더 효율적이다.