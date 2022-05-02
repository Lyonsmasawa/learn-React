import { useState } from "react";

const Home = () => {
    // let name = 'Lyons';
    const [name, setName] = useState("Lyons") //array destructuring(setName IS USED TO CHANGE THE VALUE, name is used to refer to the value)
    const [age, setAge] = useState(23)

    const handleClick = (e) => {
        setName('Masawa') //triggers react to rerender the component thus updating the templates
        setAge(24)
    }

    const handleClickAgain = (name) => {
        console.log("hello " + name);
    } 

    return ( 
        <div className="home">
            <h2>Homepage</h2> 
            <p>{name} : {age}</p>
            <button onClick={handleClick}>Click me</button> 
            {/* every event has events objects automatically which we can use for man things, passed as "e" */}
            <button onClick={() => {handleClickAgain(name)}}>Click me again</button>
        </div>
     );
}
 
export default Home;