import React from 'react'

function PostComponent({ title, content, date }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostComponent
