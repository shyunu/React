//import logo from './logo.svg';
//import './App.css';

import { Fragment } from "react";

/*
  필요한 파일들을 불러올 때 wevpack loader사용된다.
  웹팩 로더는 직접 설치가 가능하고, 보일러플레이트로 만들경우는 자동 설정된다.
  웹팩 로더 안에 bable이라는 도구가 ES6 -> ES5로 다운그레이드 시키는 역할을 한다.
*/

function App() {

  let name = "홍길동";
  let age = 20;

  return (
    <Fragment>
    <h3>JSX문법이다.</h3>
    <ul>
      {/* JSX의 주석 사용 형식 */}
      <li>1. JS파일은 JSX라고 부른다. 주석은 alt shift a</li>
      <li>2. JSX는 반드시 하나의 태그를 return한다.</li>
      <li>3. div를 사용해서 묶어도 되고 Fragment or <></> 모형으로 묶으면 된다.</li>
      <li>4. 변수값을 사용할 때는 {name}, {age}로 참조한다.</li>
      <li>5. if문 보다는 삼항연산식을 사용한다.</li>
      <li>6. 화면에 보여주고 싶은 문장이 없다면 null을 리턴하면 된다.</li>
      <li>7. undefined를 반환해도 되지만, 지양해야한다.</li>
      <li>8. DOM요소에 css를 직접 넣을 때는 객체형으로 묶고, 속성은 카멜표기법으로 사용한다. (단위 생략 시 px 기본값)</li>
      <li>9. class속성은 전부 className으로 변경된다.</li>
      <li>10. 홀로 사용되는 태그는 반드시 / 로 닫는 태그를 작성한다.{/* <input/> <br/> */}</li>
    </ul>

    <div className="example">
      클래스명?
      <br/>
      <input name="name"/>
    </div>

    <div style={{color : 'red', background : "yellow", fontSize : 20}}>
      {name === '홍길동' ? '리액트입니다.' : '리액트 아님다'}
      {age === 20 ?
        <h6>20입니다.</h6>
        :
        null
      }
    </div>
    </Fragment>
  );
}

export default App;
