import React from 'react'
import ReactMarkdown from 'react-markdown'
import { GetServerSideProps } from 'next'
import NavBar from '../../../components/navBar'
import prisma from '../../../lib/prisma'
import { PostProps } from '../../../components/Post'
import Head from 'next/head'
import gfm from 'remark-gfm'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(params?.id),
        },
        include: {
            author: {
                select: { name: true},
            },
        },
    })

    if (!post) {
        return {
            notFound:true,
        }
    }

    return {
        props: post,
    }
}


const Post: React.FC<PostProps> = (props) => {
    const createdAt = props.createdReadable ? props.createdReadable : ''
    const updatedAt = props.updatedReadable ? props.updatedReadable : ''
    let dates
    if (createdAt != '') {
        dates = createdAt
        if (updatedAt != '') {
            dates = createdAt + ", updated " + updatedAt
        }
    }
    
    let tagLinks = []
    for (let i = 0; i < props.tags.length; i++) {
        const tag = props.tags[i];
        if (i+1 < props.tags.length) {
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
        <div>
            <Head>
                <title>{props.title} | Kayt.dev</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="description" content="Homepage for kayt_was_taken developer" />
				<meta name="author" content="kayt_was_taken" />
				<meta name="keywords" content="Kayt, dev, kayt_was_taken"/>
            </Head>
            <NavBar blog={true}/>
            <div className="postContainer">
                <h2>{props.title}</h2>
                <hr />
                <p className="dark:bg-dark-theme-beige dark:p-2 dark:text-black">Tags: {tagLinks} | {dates}</p>
                <div className="postContent">
                    <ReactMarkdown plugins={[gfm]} children={props.content} />
                </div>
            </div>
        </div>
    )
}

export default Post