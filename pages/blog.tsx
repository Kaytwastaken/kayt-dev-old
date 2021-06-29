import { GetServerSideProps } from "next"
import Post, { PostProps } from '../components/Post'
import NavBar from "../components/navBar"
import prisma from "../lib/prisma"
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async () => {
	const feed = await prisma.post.findMany({
		include: {
			author: {
				select: { name: true },
			},
		},
		orderBy: { updatedAt: 'desc' }
	})
	return { props: { feed } }
}

type Props = {
	feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
	return (
		<div>
			<Head>
				<title>blog | Kayt.dev</title>
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
			<NavBar/>
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