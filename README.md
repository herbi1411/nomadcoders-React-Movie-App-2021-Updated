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
* React Component는 이름이 <span style="color:red">대문자</span>로 시작해야한다. 소문자로 적으면 React가 일반 tag로 생각한다.
* Component를 다른 Component 안에 삽입하려면 Component들을 함수 형태로 만든 다음에 태그를 통해 삽입한다.

___
### 3.0 Understanding State
* JS에서는 component.innerText 를 통해 요소를 수정하지만, JSX에서는 그저 변수를 중괄호에 넣는 것 만으로 수정 가능하다.
* 코드에서 eventlistner를 통해 counter 변수 값을 수정하는 일을 하고 있는데, 이렇게 하면 component를 render하는 함수는 아직 한번만 호출되므로, html화면에서 업데이트 되지 않는다. (state의 필요성)
* state를 사용하지 않고 화면을 update하려면 render함수를 호출해야한다.
* React는 일반 JS와 다르게 컴포넌트의 변화된 부분만 파악해서 바꿔주므로 더 효율적이다.

___
### 3.1 setState part One
* useState를 사용하면 기본적으로 초기값과, 값을 변경하는데 필요한 함수가 배열로 주어진다.

___
### 3.2 setState part Two
* 배열형태로 useState 값을 받아와서, 두번째 값인 함수를 통해 첫번 째 값인 상태를 update한다.

___
### 3.4 State Functions
* set함수에 상태값을 직접 넣으면, 상태값이 다른 함수에 의해 바뀌었을 수 있어서 좋지 않다.
* 대신에 set함수 안에 state값을 함수형태로 인자로 넣으면 React에서 그 값이 현재 값이라는 것을 보장해줌.
* 이유: setState함수는 비동기 함수이므로, 값을 인자값으로 넣으면 뒤의 코드와 setState안의 코드가 동시에 실행된다. 이때 setState함수가 또 있으면 똑같은 state값이 setState에 2번 들어가게돼 중복이 발생하는 것이다. 따라서 함수형태로 인자값을 주면, 먼저 함수가 실행 된 후에 setState함수의 인자값으로 들어가게 되므로 안전하게 원하는 대로 값을 update 할 수 있다.
(04:45 왜 setcounter에 함수를 넣어야 최신값이 보장되는가???)

___
### 3.5 Inputs and State
* JSX에서도 일반 HTML 태그를 쓸 수 있음
* label태그에서 for의 값으로 연결할 요소의 id를 명시해 연결시킬 수 있다.
* JSX에서는 for가 JS에서 쓰이므로, htmlFor라 해야한다. (class도 className이라고 써야함)
* HTML 코드로는 input의 값을 Control할 수 없음

___
### 3.6 State Practice part One
* 여러개 input의 value값을 같은 변수로 지정할 수 있음 (값이 함께 변함)

___
### 3.7 State Practice part Two
* 시간<->분 변환을 위한 flip 변수 추가

___
### 3.9 Final Practice and Recap
* 여러개의 component를 생성해 App에 합치기
* Componenet이름은 대문자로 시작해야함
* 값을 선택할 수 있는 select HTML 태그가 있음 (option과 함께 사용, option 태그의 value를 통해 원하는 작업 가능)
* hr태그 : 화면에 수평선 그리기

___
### 4.0 Props
* 부모 component에서 자식 component로 값을 넘겨주기
* HTML 태그에 속성을 주는 것과 같이 custom component에 prop을 주면 됨
* prop은 배열로 묶여서 하나의 parameter로 전달됨

___
### 4.1 Memo
* props로 함수도 전달할 수 있다.
* 부모의 상태가 변경되면 자식 상태도 모두 Re-rendering 된다.
* Memo를 통해 자식 component의 변화가 없다면 부모 component가 변해도 re-render하지 않도록 설정할 수 있다.
* memo함수를 호출해서 인자로 자식 component에 넣은 뒤, 부모 component에서는 memo함수의 반환값(component)를 사용하면 된다.
* 콜백 함수를 인자로 넘겨줄 때는, 부모 component가 rerender할 때 코드가 같더라도 계속 새로운 함수를 넘겨주므로 memo의 효과가없다. 이때는 usecallback을 사용해 rerender를 막을 수 있다.

___
### 4.2 Prop Types
* Prop Types를 통해 컴포넌트로 넘겨줄 props의 type을 지정할 수 있음
* 협업할 때 실수로 다른 type의 변수를 넘겨주는 것을 방지할 수 있음
* default argument를 설정할 수 있다.

___
### 5.0 Introduction (Create-React-App)
* npx create-react-app \[project name\]으로 프로젝트 생성
* npm start로 프로젝트 실행

___
### 5.1 Tour of CRA(Create React App)
* Button Component 추가해보기
* css속성을 주기위해 상위 component 파일에서 css파일을 import 해도 된다.
* css파일을 component에 삽입할때 (import styles.\[id\] from \[route\])를 입력하면 React에서 객체처럼 style을 적용할 수 있다. 적용하고 싶은 component의 className속성에 styles.\[id\] 를 입력하면 된다. 이때 css파일의 이름은 확장자 앞에 .module이 붙어야한다.
* 이 방식은 여러 파일에 각자 css파일을 적용했을 때 id 값이 중복되도 값이 겹치지 않는다는 장점이 있다. (React에서 Random으로 css id를 생성한다.)

___
### 6.0 Introduction(Effect)
* Effect를 통해 표현하고 싶은 요소를 원할 때만 Render할 수 있다.

___
### 6.1 useEffect
* Effect를 통해 처음 component가 render될 때만 실행하고 싶은 작업을 할 수 있다.

___
### 6.2 Deps
* Effect 함수를 사용할때 2번째 인자값 배열 안에 변수를 넣으면, 배열 값의 상태가 바뀔 때 1번째 인자인 call back함수가 실행된다.

___
### 6.4 CleanUp
* useEffect callback 함수의 return 값으로 함수를 넘김으로써 clean up 함수를 실행할 수 있다.

___
### 7.0 To Do List part One
* state로 배열을 선언하더라도 값을 수정할 때는 setState를 사용해야한다.
* 배열을 선언하고 .push해도 값이 들어가긴 하는데 버그가 발생한다.

___
### 7.1 To Do List part Two
* map함수를 통해서 배열로 이루어진 state를 화면에 요소별로 출력할 수 있다.
* forEach 함수는 단지 요소별로 callback함수를 실행하며, map함수는 Callback함수의 return값을 모아서 새로운 배열을 반환한다.
* list component를 render할 때는 list의 각 요소에 prop으로 key가 있어야 한다.

___
### 7.2 Coin Tracker
* 수천개 코인의 시세 가져오기
* api를 통해 json으로 코인들을 가져와 보여준다.


___
### 7.3 Movie App part One
* Movie app 만들기 시작
* 비동기 함수 처리를 위해 then 보단 async-await을 많이 사용한다.
* 동기로 만들기 위해 코드를 작성할 함수 이름 앞에 async를 붙이고, 내부에서 sync를 맞출 함수 앞에 await을 붙인다.
* 이렇게 하면 함수 내부적으로 await이 붙은 곳 앞에서 비동기 함수의 처리를 기다림으로써 동기적으로 sync를 맞추는 효과를 낼 수 있다.
* [async/await 학습](https://victorydntmd.tistory.com/87)
___
### 7.4 Movie App part Two
* React에서의 화면전환
* Proptype에서 요소가 배열로 들어올 때 arrayOf\(\)를 통해 배열 요소의 속성을 지정할 수 있다.

___
### 7.5 React Router
* url에 따라 사용할 component를 정하기 위해 Router를 사용한다.
* App파일에는 Router를 넣는다.
* Router에는 (Brower Router / Hash Router) 2개가 있다. Hash Router는 거의 안쓰인다.
* react-router-dom 버전6부터 Routers가 switch를 대신한다. (한개의 Route만 Render하는 역할)
* Link component를 활용해서 페이지 위치가 바뀌어도 페이지가 새로고침 되지 않는다.
* [React router overview](https://reactrouter.com/docs/en/v6/getting-started/overview)
* [Hash Router, Browser Router 비교](https://worker-k.tistory.com/entry/React-BrowserRouter%EC%99%80-HashRouter%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%A0%95%EB%A6%AC)

___
### 7.6 Parameters
* Router에는 Dynamic url을 넣을 수 있다. Dynamic url이란 url에 변수가 들어갈 수 있다는 뜻이다.
* useParams 함수를 통해 Dynamic url에 들어간 변수 값을 알아낼 수 있다.
* [Promise 공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)


___
### 7.7 Publishing
* github-io에 프로젝트를 build 할 수 있다.
* 순서
1. npm install gh-pages
2. package.json에서 scripts에 "deploy" : "gh-pages -d build"와 "predeploy": "npm run build" 삽입
3. 파일 마지막에 "hompage" : "https://\[github이름\].github.io/\[레포지토리 이름\]"입력
3. npm run deploy