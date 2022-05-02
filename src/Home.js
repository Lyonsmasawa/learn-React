import {
    useState,
    useEffect
} from "react";
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
        const [blogs, setBlogs] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null)

        // const handleDelete = (id) => {
        //     const newBlogs = blogs.filter(blogs => blogs.id !== id);
        //     setBlogs(newBlogs);
        // }

        useEffect(() => {
            setTimeout(() => {
                fetch('http://localhost:8000/blogs')
                    .then(res => {
                        // console.log(res)
                        if (!res.ok) {
                            throw Error("could not fetch the data for that resource");
                        }
                        return res.json() //passes the json into a javascript object for us
                    })
                    .then(data => {
                        console.log(data);
                        setBlogs(data)
                        setIsPending(false)
                        setError(null)
                    })
                    .catch(err => {
                        setError(err.message)
                        setIsPending(false)
                        console.log(err.message)
                    })
            }, 1000); //just to simulate loading
        }, []);

        return (
            <div className = "home" > {
                /* <h2>Homepage</h2>  */ }
                {/* <p>{name} : {age}</p> */ } 
                {/* <button onClick={handleClick}>Click me</button>  */ } 
                {/* every event has events objects automatically which we can use for man things, passed as "e" */ } 
                {/* <button onClick={() => {handleClickAgain(name)}}>Click me again</button> */ } 
                { error && <div>{ error }</div>} 
                {isPending && <div> Loading... </div>} 
                {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}
                {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/>  */ } 
            </div>
            );
        }
        // the above rendering is called conditional rendering

        export default Home;