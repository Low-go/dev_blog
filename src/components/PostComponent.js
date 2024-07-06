import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

function PostComponent({path}) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(path)
      .then(response => response.text())
      .then(text => setMarkdownContent(text));
  }, [path]);

  return (
    <div>
      <Markdown>{markdownContent}</Markdown>
      <br />
    </div>
  );
}

export default PostComponent;
