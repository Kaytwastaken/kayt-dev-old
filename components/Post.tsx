import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  excerpt: string;
  tags: string[];
  createdReadable: string;
  createdAt: string;
  updatedReadable: string;
  updatedAt: string;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const createdAt = post.createdReadable ? post.createdReadable : ''
  const updatedAt = post.updatedReadable ? post.updatedReadable : ''
  let dates
  if (createdAt != '') {
    dates = " | " + createdAt
    if (updatedAt != '') {
      dates = " | " + createdAt + ", updated " + updatedAt
    }
  }
  return (
    <div onClick={() => Router.push("/blog/p/[id]", `/blog/p/${post.id}`)} className="card">
      <h3>{post.title}</h3>
      <hr />
      <small>{post.tags.join(', ')}{dates}</small>
      <div className="w-5/6"><ReactMarkdown children={post.excerpt ? post.excerpt + '...' : post.content.slice(0, 100)+'...'} /></div>
    </div>
  );
};

export default Post;
