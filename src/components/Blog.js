import { useState } from 'react'
import '../blog.css'
import blogService from '../services/blogs'

const Blog = ({ blog }) => {
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

  const returnUser = () => {
    if (blog.user.username) {
      return blog.user.username

    }

    return null
  }

  const increaseLikes = () => {
    const newLikes = likes+1
    console.log(likes)
    const updatedBlog = blogService.update(blog.id,
      {
        user: blog.user.id,
        likes: newLikes,
        author: blog.author,
        title: blog.title,
        url: blog.url
      }
    )
    setLikes(newLikes)
 
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
        {returnUser()}


      </div>
    </div >
  )

}


export default Blog