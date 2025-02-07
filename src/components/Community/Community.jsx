import React, { useState } from "react";
import "./Community.css";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Referral and Opportunities",
      company: "works at Accenture",
      content:
        "I can refer to ACCENTURE, please like and DM with your skill set. Thanks.",
      likes: 1486,
      comments: 1056,
      liked: false,
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() === "") return;

    const newPostData = {
      id: Date.now(),
      author: "You",
      company: "Logged-in User",
      content: newPost,
      likes: 0,
      comments: 0,
      liked: false,
    };

    setPosts([newPostData, ...posts]);
    setNewPost("");
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1, liked: true }
          : post
      )
    );
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="community-container">
      <div className="community-header">
        <h2>Join the conversation</h2>
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button className="post-button" onClick={handlePostSubmit}>
          Post
        </button>
      </div>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <h3>{post.author}</h3>
              <span>{post.company}</span>
            </div>
            <p>{post.content}</p>
            <div className="post-actions">
              <button
                className={`like-button ${post.liked ? "liked" : ""}`}
                onClick={() => handleLike(post.id)}
              >
                👍 {post.likes}
              </button>
              <button>💬 {post.comments} Comments</button>
              <button>🔗 Share</button>
              {post.author === "You" && (
                <button onClick={() => handleDelete(post.id)}>🗑 Delete</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
