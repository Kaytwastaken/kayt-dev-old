import NavBar from "../components/navBar"
import Link from "next/link";
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Kayt.dev</title>
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
					<ul className="dark:hidden flex justify-center mt-8"> {/* Images Links */}
						{/* Tumblr */}
						<li className="index-image">
							<a href="https://kayt-was-taken.tumblr.com/"><Image src="/icos/tumblr-3-64.png" alt="Tumblr logo" width="64" height="64"/></a>
						</li>
						{/* Youtube */}
						<li className="index-image"> 
							<a href="https://www.youtube.com/channel/UCb6ZkG3s5pNIl6OMoKk5Hmg"><Image src="/icos/yt_icon_mono_light.png" alt="YouTube logo" width="90" height="64"/></a>
						</li>
						{/* Insta */}
						<li className="index-image"> 
							<a href="https://www.instagram.com/kayt_was_taken"><Image src="/icos/InstagramLogoBlack.png" alt="Instagram logo" width="64" height="64"/></a>
						</li>
						{/* Twitter */}
						<li className="index-image"> 
							<a href="https://www.twitter.com/kayt_was_taken"><Image src="/icos/TwitterLogoBlack.png" alt="Twitter logo" width="70" height="57"/></a>
						</li>
					</ul>
					<ul className="hidden dark:flex justify-center mt-8"> {/* Images Links */}
						{/* Tumblr */}
						<li className="index-image">
							<a href="https://kayt-was-taken.tumblr.com/"><Image src="/icos/tumblr-3-64_dark.png" alt="Tumblr logo" width="64" height="64"/></a>
						</li>
						{/* Youtube */}
						<li className="index-image"> 
							<a href="https://www.youtube.com/channel/UCb6ZkG3s5pNIl6OMoKk5Hmg"><Image src="/icos/yt_icon_mono_light_dark.png" alt="YouTube logo" width="90" height="64"/></a>
						</li>
						{/* Insta */}
						<li className="index-image"> 
							<a href="https://www.instagram.com/kayt_was_taken"><Image src="/icos/InstagramLogoBlack_dark.png" alt="Instagram logo" width="64" height="64"/></a>
						</li>
						{/* Twitter */}
						<li className="index-image"> 
							<a href="https://www.twitter.com/kayt_was_taken"><Image src="/icos/TwitterLogoBlack_dark.png" alt="Twitter logo" width="70" height="57"/></a>
						</li>
					</ul>
				</div>
				<div className="">
					<ul className="flex justify-center text-center mt-8">
						<li className="card">
							<Link href="/blog">
								<h3 className="w-32 mx-4 font-body text-2xl text-black">Blog</h3>
							</Link>
						</li>
					</ul>
					<div className="w-4/5 lg:w-1/3 mt-24 mx-auto h-full beige-container">
						<h3 className="font-body text-2xl text-dark-theme-beige mt-2">About me</h3>
						<h3 className="font-body text-dark-theme-beige">v</h3>

						<div className="my-8">
							<div className="mt-2 float-left mr-4 dark:hidden"><Image src="/icos/pink_blue_picrew.png" width="128" height="128"></Image></div>
							<div className="mt-2 float-left mr-4 hidden dark:block"><Image src="/icos/brown_blue_picrew.png" width="128" height="128"></Image></div>
							Hi! I'm kayt! I do stuff sometimes and that's about it. As you've
							probably seen above this section, this is the home to my blog and links to all my other things.
							If you asked me to describe myself I really don't  know what I would say other than "a programmer who
							barely codes", "an artist that barely draws", and "not a youtuber but sometimes i make videos with my friends"
							<br />
							<ul className="mt-2">
								If you want more than that though...
								<li>{"-"} Inconsistent capitalization my beloved</li>
								<li>{"-"} inconsistent punctuation my also beloved.</li>
								<li>{"-"} i basically quit twitter because i didnt like it</li>
								<li>{"-"} sysadmin is my passion /hj</li>
								<li>{"-"} i think fahrenheit is better for air temperatue but i use celcius anyway</li>
								<li>{"-"} i have a bunch of earrings but i never wear them because i like the purple ones i keep in my ears</li>
								<li>{"-"} minecraft youtube is my home</li>
								<li>{"-"} she/they cause <b>L</b>ets <b>G</b>et <b>B</b>read <b>T</b>oday</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
