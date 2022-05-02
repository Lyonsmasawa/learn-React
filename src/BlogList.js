const BlogList = (props) => {
    
    return ( 
        <div className="blog-list">
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