import { Fragment } from "react";
import EventComponent from "./component/EventComponent";
import EventComponent2 from "./component/EventComponent2";
import EventComponentQ from "./component/EventComponentQ";

function App() {
  return (
    <Fragment>
      <EventComponent/>
      
      <hr/>

      <EventComponent2/>

      <hr/>

      <EventComponentQ/>
    </Fragment>
  )
}

export default App;