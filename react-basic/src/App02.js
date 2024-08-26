import MyComponent from "./component/MyComponent";


//예제 app
function App() {
  return (
    <>
      <MyComponent name={"홍길동"} age={20} addr={"서울시"}/>
      <MyComponent/>
    </>
  )
}

export default App;