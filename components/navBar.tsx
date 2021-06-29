import React from "react";
import Link from 'next/link'

// mx-8 lg:mx-16
export default function NavBar({blog=false}) {
    return <div className="flex content-center bg-primary-gray dark:bg-dark-theme-brown">
        <div className="ml-4 xl:ml-8">
            <Link href="/">
                <a><h1>&#060;Kayt.dev/&#062;</h1></a>
            </Link>
        </div>
        <div className="ml-4 xl:ml-8 my-auto">
            {
                blog? 
                (
                    <Link href="/blog"><a><h3 className="font-body">Blog</h3></a></Link>
                ) : ''
            }
        </div>
    </div>
}