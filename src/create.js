import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsPending(true)

       setTimeout(() => {
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            // navigate.go(-1)
            navigate.push('/')
        })
       }, 1000);
    }

    return ( 
        <div className="create">
            <p>{title}</p>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title</label>
                <input type="text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog body</label>
                <textarea   required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}>
                  
                </textarea>
                <label htmlFor="">Blog Author</label>
                  <label htmlFor=""></label>
                  <select name="" id="" value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                  </select>
                  {!isPending && <button>Add Blog</button>}
                  {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;