import React from 'react'
import ReactMarkdown from 'react-markdown'
import { GetServerSideProps } from 'next'
import NavBar from '../../../components/navBar'
import prisma from '../../../lib/prisma'
import { PostProps } from '../../../components/Post'
import Head from 'next/head'

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
    return (
        <div>
            <Head>
                <title>{props.title} | Kayt.dev</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ffffff" />
				<meta name="description" content="Homepage for kayt_was_taken developer" />
				<meta name="author" content="kayt_was_taken" />
				<meta name="keywords" content="Kayt, dev, kayt_was_taken"/>
				<meta charSet="UTF-8"/>
            </Head>
            <NavBar blog={true}/>
            <div className="postContainer">
                <h2>{props.title}</h2>
                <hr />
                <p className="small dark:bg-dark-theme-beige dark:p-2 dark:text-black">Tags: {props.tags.join(', ')}</p>
                <div className="postContent">
                    <ReactMarkdown children={props.content} />
                </div>
            </div>
        </div>
    )
}

export default Post