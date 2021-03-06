import { GetServerSideProps } from "next"
import Post, { PostProps } from '../components/Post'
import NavBar from "../components/navBar"
import prisma from "../lib/prisma"
import tags from "../lib/tags"
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const feed = await prisma.post.findMany({
		where: {
			tags: {
				hasSome: context.query.tags ? context.query.tags : tags,
			},
		},
		include: {
			author: {
				select: { name: true },
			},
		},
		orderBy: { createdAt: 'desc' }
	})
	return (
		{ props: { feed } }
	)
}

type Props = {
	feed: PostProps[]
}



const Blog: React.FC<Props> = (props) => {
	console.log(this)
	return (
		<div>
			<Head>
				<title>blog | Kayt.dev</title>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="description" content="Kayt's Blog" />
				<meta name="author" content="kayt_was_taken" />
				<meta name="keywords" content="Kayt, dev, kayt_was_taken"/>
			</Head>
			<NavBar />
			<div className="mx-auto justify-center text-center mt-4 xl:mt-8 w-full sm:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5">
				{props.feed.map((post) => (
					<div key={post.id}>
						<Post post={post} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Blog
