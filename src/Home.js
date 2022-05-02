import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let name = 'Lyons';
    // const [name, setName] = useState("Lyons") //array destructuring(setName IS USED TO CHANGE THE VALUE, name is used to refer to the value)
    // const [age, setAge] = useState(23)

    // const handleClick = (e) => {
    //     setName('Masawa') //triggers react to rerender the component thus updating the templates
    //     setAge(24)
    // }

    // const handleClickAgain = (name) => {
    //     console.log("hello " + name);
    // }
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        
    }

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2>  */}
            {/* <p>{name} : {age}</p> */}
            {/* <button onClick={handleClick}>Click me</button>  */}
            {/* every event has events objects automatically which we can use for man things, passed as "e" */}
            {/* <button onClick={() => {handleClickAgain(name)}}>Click me again</button> */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete()} /> 
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/>  */}
        </div>
     );
}
 
export default Home;