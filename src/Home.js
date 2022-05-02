const Home = () => {
    let name = 'Lyons'
    const handleClick = (e) => {
        console.log('hello, ninjas', e.target);
    }

    const handleClickAgain = (name) => {
        console.log("hello " + name);
    } 

    return ( 
        <div className="home">
            <h2>Homepage</h2> 
            <button onClick={handleClick}>Click me</button> 
            {/* every event has events objects automatically which we can use for man things, passed as "e" */}
            <button onClick={() => {handleClickAgain(name)}}>Click me again</button>
        </div>
     );
}
 
export default Home;