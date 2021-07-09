import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

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
    dates = createdAt
    if (updatedAt != '') {
      dates = createdAt + ", updated " + updatedAt
    }
  }

  let tagLinks = []
  for (let i = 0; i < post.tags.length; i++) {
    const tag = post.tags[i];
    if (i+1 < post.tags.length) {
      tagLinks.push(
        <span>
          <a href={`http://localhost:3000/blog?tags=${tag}`} className="hover:underline">{tag}</a>
          <span>, </span>
        </span>
      )  
    } else {
      tagLinks.push(
        <span>
          <a href={`http://localhost:3000/blog?tags=${tag}`} className="hover:underline">{tag}</a>
        </span>
      )
    }
  }

  return (
    <div className="noLinkCard">
      <h3 onClick={() => Router.push("/blog/p/[id]", `/blog/p/${post.id}`)} className="cursor-pointer mx-4 hover:underline">{post.title}</h3>
      <hr />
      <small className="text-black">{tagLinks} | {dates}</small>
      <div className="mx-auto black-container w-5/6"><ReactMarkdown remarkPlugins={[gfm]} children={post.excerpt ? post.excerpt + '...' : post.content.slice(0, 100)+'...'} /></div>
    </div>
  );
};

export default Post;
