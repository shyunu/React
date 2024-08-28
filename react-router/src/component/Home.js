import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h3>홈페이지입니다</h3>
      <Link to='/user'>user 페이지</Link>
      <br/>
      <Link to='/info'>info 페이지</Link>
    </div>
  )
}
export default Home;