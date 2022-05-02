import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from  'react-router-dom';
import Create from './create';


function App() {
  // const title ='Welcome To The New Blog';
  // const likes = 50;
  // const link = "http://google.com"
  
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>  "ensures only one component renders"
          <Route exact path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
        {/* <h1>{ title }</h1>
        <p>Liked: { likes } times</p>
        <p>{ 10 }</p>
        <p>{[1,2,3,4,5,6]}</p>
        <p>{ "likes" }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link} >GoogleSite</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App; //export our component function to allow us to import it in other files
