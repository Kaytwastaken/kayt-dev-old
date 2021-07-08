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
				<meta name="description" content="Homepage for kayt_was_taken developer" />
				<meta name="author" content="kayt_was_taken" />
				<meta name="keywords" content="Kayt, dev, kayt_was_taken"/>
			</Head>
			<NavBar/>
			<div className="mt-2h">
				<div> {/* Socials */}
					<h1 className="hidden md:block">@Kayt_was_taken everwhere</h1>
					<h1 className="block md:hidden">@Kayt_was_taken</h1>
					<ul className="dark:hidden flex justify-center mt-8"> {/* Light image links */}
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
					<ul className="hidden dark:flex justify-center mt-8"> {/* Dark image links */}
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
					
					{/* Youtube Embed */}
					{/* <div className="w-4/5 lg:w-1/3 mt-24 mx-auto">
						<h3 className="font-body text-2xl text-dark-theme-beige mb-4">Latest YouTube upload</h3>
						<iframe 
							width="560"
							height="315"
							src="https://www.youtube-nocookie.com/embed/Ud_3j3do_NM"
							title="YouTube video player"
							frameBorder="0"
							allow="
								accelerometer;
								autoplay;
								clipboard-write;
								encrypted-media;
								gyroscope;
								picture-in-picture
							" 
							allowFullScreen>
							</iframe>
					</div> */}

					{/* About me */}
					<div className="w-4/5 lg:w-1/3 mt-24 mx-auto beige-container">
						<h3 className="font-body text-2xl text-dark-theme-beige mt-2">About me</h3>
						<h3 className="font-body text-dark-theme-beige">v</h3>

						<div className="my-8">
							<div className="mt-2 float-left mr-4 dark:hidden"><Image src="/icos/pink_blue_picrew.png" alt="profile picture of a female cartoon character with pink hair, white skin, a white and black hoodie in front of a pink and blue background" width="128" height="128"></Image></div>
							<div className="mt-2 float-left mr-4 hidden dark:block"><Image src="/icos/brown_blue_picrew.png" alt="profile picture of female cartoon character with brown hair, dark red wings, dark brown and beige clothes, in front of a circular blue background" width="128" height="128"></Image></div>
							Hi! I'm kayt! I do stuff sometimes and that's about it. As you've
							probably seen above this section, this is the home to my blog and links to all my other things.
							If you asked me to describe myself I really don't  know what I would say other than "a programmer who
							barely codes", "an artist that barely draws", and "not a youtuber but sometimes i make videos with my friends"
							
							<br />
							If you want more than that though...
							<ul className="mt-2">
								<li>{"-"} I cant be bothered to care about punctuation or capitalization rules most of them time</li>
								<li>{"-"} sysadmin is my passion /hj</li>
								<li>{"-"} i think fahrenheit is better for air temperatue but i use celcius anyway</li>
								<li>{"-"} i have a bunch of earrings but i never wear them because i like the purple ones i keep in my ears</li>
								<li>{"-"} minecraft youtube is my home</li>
								<li>{"-"} i strongly believe ctrl+shift+z is better than ctrl+y</li>
								<li>{"-"} idc if its basic asf give me my ceasar salad and fuck off</li>
							<br />
							what languages do you know?
							<ul>
								<li>{"-"} i spent a year learning italian but i didnt retain very much of it</li>
								<li>{"-"} i know useless little smidges of spanish, german, and japanese</li>
								<li>{"-"} id like to learn asl, japanese, german, italian, spanish, and maybe russian in no particular order</li>
								<li>{"-"} i imagine myself smashing all the bits of languages i know into my own "language"
								(for some reason im particularly fond of the italian word noi for we, grammatical gender can eat my fist though)</li>
								<li>{"-"} all my real programming experience is in js and ts</li>
								<li>{"-"} id like to learn or at least learn about go, C#, C++, java, and python, again in no particular order</li>
							</ul>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
