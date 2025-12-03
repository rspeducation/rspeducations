import React, { useState } from 'react';

export const RightSidebar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchUrl = `https://www.google.co.in/search?q=${encodeURIComponent(searchQuery)}&sitesearch=rspeducation.in`;
      window.open(searchUrl, '_blank');
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      alert('Comment submitted! (This is a demo)');
      setName('');
      setComment('');
    }
  };

  const categories = [
    { name: 'Microsoft Word', count: 27 },
    { name: 'Microsoft Power Point', count: 28 },
    { name: 'HTML', count: 60 }
  ];

  return (
    <div className="right-sidebar">
      <div className="search-container">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="search-input"
            aria-label="Search"
          />
          <button type="submit" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div className="categories-widget">
        <h3>Post Categories</h3>
        <hr />
        <div className="categories-list">
          {categories.map((category, index) => (
            <a key={index} href="#" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{category.name}</span>
              <span>{category.count}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="comment-box">
        <h2>Leave a comment</h2>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="comment-input"
            required
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={5}
            placeholder="Your Comment"
            className="comment-input comment-textarea"
            required
          ></textarea>
          <button type="submit" className="comment-submit">
            POST COMMENT
          </button>
        </form>
      </div>
    </div>
  );
};