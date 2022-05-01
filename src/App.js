import './App.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  // const title ='Welcome To The New Blog';
  // const likes = 50;
  // const link = "http://google.com"
  
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home></Home>
        {/* <h1>{ title }</h1>
        <p>Liked: { likes } times</p>
        <p>{ 10 }</p>
        <p>{[1,2,3,4,5,6]}</p>
        <p>{ "likes" }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link} >GoogleSite</a> */}
      </div>
    </div>
  );
}

export default App; //export our component function to allow us to import it in other files
