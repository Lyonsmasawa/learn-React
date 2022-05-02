const BlogList = ({blogs, title}) => {
    // u can pass (props) or just destructure them right there
    // const blogs = props.blogs
    // console.log(props, blogs)

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                {/* key property is used to keep track of each item it outputs, must be unique and must be there */}
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;