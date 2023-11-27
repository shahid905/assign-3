import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <section className="header">
       

        <div className="text_box">
            <h2>PIAIC BLOG</h2>
            {/* <a href={"/Blog"} className='btn'>Visit My Blog</a> */}
           <Link href={"/blog"} className='btn'>Visit My Blog</Link>
        </div>
    </section>
     

    </main>
  )
}
