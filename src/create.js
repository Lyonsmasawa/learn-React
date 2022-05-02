const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label htmlFor="">Blog Title</label>
                <input type="text"
                    required
                />
                <label htmlFor="">Blog body</label>
                <textarea>
                    required
                </textarea>
                <label htmlFor="">Blog Author</label>
                  <label for=""></label>
                  <select class="form-control" name="" id="">
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                  </select>
                  <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;