import React from 'react'
import { useState } from 'react'

const CreateBlogForm = ({ handleBlogCreating }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = ({ target }) => {
    setTitle(target.value)
  }

  const handleAuthorChange = ({ target }) => {
    setAuthor(target.value)
  }

  const handleUrlChange = ({ target }) => {
    setUrl(target.value)
  }

  return (
    <div>
      <div>
        <h2>Create new blog</h2>
      </div>
      <form onSubmit={handleBlogCreating}>
        <div>
          title
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          author
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          url
          <input
            type="text"
            name="url"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <button type="submit">create new</button>
      </form>
    </div>
  )
}

export default CreateBlogForm