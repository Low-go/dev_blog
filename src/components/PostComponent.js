import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import './PostComponent.css';
import { FaGithub } from 'react-icons/fa'; // For GitHub icon

function PostComponent({ path }) {
  const [markdownContent, setMarkdownContent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [githubLink, setGithubLink] = useState('');

  useEffect(() => {
    fetch(path)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const title = lines.shift(); // First line as title
        const date = lines.shift(); // Second line as date
        const lastLine = lines[lines.length - 1].startsWith('GitHub:') ? lines.pop() : '';
        setTitle(title);
        setDate(date);
        setMarkdownContent(lines.join('\n'));
        setGithubLink(lastLine.replace('GitHub: ', ''));
      });
  }, [path]);

  return (
    <div className="post-component">
      <div className="title">{title}</div>
      <div className="date">{date}</div>
      <Markdown>{markdownContent}</Markdown>
      <div className="github-section">
        <FaGithub size={20} />
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>}
      </div>
    </div>
  );
}

export default PostComponent;
