"use client";

import Image from "next/image";
import { Avatar } from "../Avatar";
import "./cardpost-module.css";

const CardPost = ({ post }) => {
  const videoId = post.url.split("/").pop();

  return (
    <div className="card-post">
      <header className="card-header">
        <div className="card-video-wrapper" style={{ width: 280, height: 400 }}>
          <iframe
            src={`https://www.tiktok.com/embed/${videoId}`}
            width="280"
            height="400"
            frameBorder="0"
            allowFullScreen
            scrolling="no"
            title={`TikTok video ${videoId}`}
          ></iframe>
        </div>
      </header>

      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.body}</p>
      </div>

      <footer className="card-footer">
        <div className="avatar-wrapper">
          <Image
            src={post.author.avatar}
            alt={`Avatar de ${post.author.username}`}
            width={28}
            height={28}
            className="avatar-img"
          />
          <span className="author-name">@{post.author.username}</span>
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok-link"
        >
          <Image
            src="/icons8-tiktok.svg"
            alt="Ver no TikTok"
            width={48}
            height={48}
          />
        </a>
      </footer>
    </div>
  );
};

export default CardPost;
