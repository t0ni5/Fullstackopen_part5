import { useState } from 'react'
import '../blog.css'
import blogService from '../services/blogs'

const Blog = ({ blog, updateAppComponent, increaseLikes }) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }



  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const showUser = () => {
    if (blog.user) {
      return blog.user.username

    }
  }



  const showRemoveButton = () => {
    if (blog.user)
      return (
        <div>
          <button onClick={removeBlog}>remove</button>
        </div>
      )
  }

  const removeBlog = async () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author} ?`)) {
      await blogService.deleteBlog(blog.id)
      updateAppComponent()
    }

  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible} className="briefInfo">
        {blog.title} {blog.author} <button onClick={toggleVisibility}>view</button>
      </div>

      <div style={showWhenVisible} className="fullInfo">
        {blog.title} {blog.author} <button onClick={toggleVisibility}>hide</button> <br />
        {blog.url} <br />
        likes {blog.likes}  <button onClick={() => increaseLikes(blog)}>like</button> <br />
        {showUser()}
        {showRemoveButton()}


      </div>
    </div >
  )

}


export default Blog