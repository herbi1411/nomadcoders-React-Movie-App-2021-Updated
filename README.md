#### 노마드코더 REACT 기초 강의([ReactJS로 영화 웹서비스 만들기](https://nomadcoders.co/react-for-beginners/lobby))

### 2.1 Before React
* JS만으로 Counter만들기는 비효울적임(queryselector로 요소를 찾고, eventlistner를 각각 붙여줘야 함)


### 2.2 Our First React Element
* reactDOM은 React에서 만든 element를 html에 넣기 위한 라이브러리 
* html파일에 react를 script로 import 하고 코드를 작성할 수 있다.

### 2.3 Events in React
* React에서 Element를 생성할 때 2번째 인자로 Event Listener를 추가할 수 있다. (1번째인자는 이름, 3번째인자는 내용)

### 2.5 JSX
* JSX는 javascript를 React를 쓰기위해 변형한 문법
* babel을 통해서 JSX를 js코드로 변환할 수 있음

### 2.6 JSX part Two
* React Component는 이름이 대문자로 시작해야한다. 소문자로 적으면 React가 일반 tag로 생각한다.
* Component를 다른 Component 안에 삽입하려면 Component들을 함수 형태로 만든 다음에 태그를 통해 삽입한다.