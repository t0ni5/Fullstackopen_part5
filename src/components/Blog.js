import { useState } from 'react'
import '../blog.css'
import blogService from '../services/blogs'

const Blog = ({ blog, updateAppComponent }) => {
  const [visible, setVisible] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

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

  const increaseLikes = () => {
    const newLikes = likes + 1
    if (!blog.user) {
      blogService.update(blog.id,
        {
          likes: newLikes,
          author: blog.author,
          title: blog.title,
          url: blog.url
        }
      )
    } else if (blog.user) {
      blogService.update(blog.id,
        {
          user: blog.user.id,
          likes: newLikes,
          author: blog.author,
          title: blog.title,
          url: blog.url
        }
      )
    }

    setLikes(newLikes)
    updateAppComponent()

  }



  const showRemoveButton = () => {
    if (blog.user)
      return (
        <div>
          <button onClick={removeBlog}>remove</button>
        </div>
      )
  }

  const removeBlog = async() => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author} ?`)) {
      await blogService.deleteBlog(blog.id)
      updateAppComponent()
    }

  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible}>
        {blog.title} {blog.author} <button onClick={toggleVisibility}>view</button>
      </div>

      <div style={showWhenVisible}>
        {blog.title} {blog.author} <button onClick={toggleVisibility}>hide</button> <br />
        {blog.url} <br />
        likes {likes}  <button onClick={increaseLikes}>like</button> <br />
        {showUser()}
        {showRemoveButton()}


      </div>
    </div >
  )

}


export default Blog