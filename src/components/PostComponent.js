import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

function PostComponent() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('/md_files/test.md')
      .then(response => response.text())
      .then(text => setMarkdownContent(text));
  }, []);

  return (
    <div>
      <Markdown>{markdownContent}</Markdown>
      <br />
    </div>
  );
}

export default PostComponent;
