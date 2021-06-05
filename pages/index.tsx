import NavBar from "../components/navBar"
import Link from "next/link";
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>kayt.dev</title>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<NavBar/>
			<div className="mt-2h">
				<div> {/* Socials */}
					<h1 className="hidden md:block">@Kayt_was_taken everwhere</h1>
					<h1 className="block md:hidden">@Kayt_was_taken</h1>
					<div className="flex justify-center mt-8"> {/* Images Links */}
						{/* Twitter */}
						<div className="w-16 md:w-20 mx-8"> 
							<a href="https://www.twitter.com/kayt_was_taken"><Image src="/icos/TwitterLogoBlack.png" alt="Twitter logo" width="70" height="57"/></a>
						</div>
						{/* Twitch */}
						<div className="w-16 md:w-20 mx-8"> 
							<a href="https://www.twitch.tv/kayt_was_taken"><Image src="/icos/TwitchGlitchBlackOps.png" alt="Twitch logo" width="64" height="74"/></a>
						</div>
						{/* Insta */}
						<div className="w-16 md:w-20 mx-8"> 
							<a href="https://www.instagram.com/kayt_was_taken"><Image src="/icos/InstagramLogoBlack.png" alt="Instagram logo" width="64" height="64"/></a>
						</div>
						{/* Linktree */}
						<div className="w-16 md:w-20 mx-8"> 
							<a href="https://www.linktr.ee/kayt_was_taken"><Image src="/icos/LinktreeLogoBlack.png" alt="Linktree logo" width="64" height="64"/></a>
						</div>
					</div>
				</div>
				<div className="">
					<div className="flex justify-center text-center mt-8">
						<div className="card">
							<Link href="/blog">
								<h3 className="w-32 mx-4 font-body text-2xl text-black">Blog</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
