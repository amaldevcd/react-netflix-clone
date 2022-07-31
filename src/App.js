import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Post from "./Components/Post/Post";
import {originals,action} from "./urls"
const App = () =>
{
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Post title="Netflix Originals " url={originals}/>
      <Post title="Actions" isSmall={true} url={action} />
    </div>
  )
}
export default App;
