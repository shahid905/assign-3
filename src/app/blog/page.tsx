import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function blog() {
  return (

        <section className="header-2">

                    <div className='blog-heading'>

               <h1>LATEST BLOG POSTS</h1>
               
        <div className='bg-overlay'></div>
         
        </div>

        <section className='inner-section'>
        <div>
          <img src={"/img/blog-09.jpg"}/>
                <h3>  
                  The potential impact of blockchain on the future of digital identity and privacy
                  </h3>
                
                 <h4>
                  <Link href={"/potential"} className='anchor'> 
                  The potential impact of blockchain on the future of digital identity and privacy </Link>
                 </h4>
                  <p>
                  Suscipit gravida sem, eget tincidunt ligula. Vivamus faucibus vulputate magna ac aliquam. Pellentesque pulvinar tincidunt tortor, sed finibus velit consequat scelerisque. Morbi tempor libero nisi, eget blandit orci vestibulum vitae. Integer cursus magna a efficitur sagittis.
                  
                  </p>
                  </div>


                  <div>
          <img src={"/img/blog-11.jpg"}/>
                
                
                 <h4>
                  <Link href={"/potential"} className='anchor'> 
                  
The scalability concerns facing blockchain technology and how they’re being addressed </Link>
                 </h4>
                  <p>
                  Quisque suscipit gravida sem, eget tincidunt ligula. Vivamus faucibus vulputate magna ac aliquam. Pellentesque pulvinar tincidunt tortor, sed finibus velit consequat scelerisque. Morbi tempor libero nisi, eget blandit orci vestibulum vitae. Integer cursus magna a efficitur sagittis.                  
                  </p>
                  </div>

                  <div>
          <img src={"/img/blog-05.jpg"}/>
                
                
                 <h4>
                  <Link href={"/potential"} className='anchor'> 
                  
                  The role of NFT’s in blockchain technology and their potential uses </Link>
                 </h4>
                  <p>
                  Proin leo massa, pretium in sapien et, ullamcorper sagittis mauris. Vestibulum quis ipsum dolor. Vivamus vel odio nec magna laoreet consectetur. Morbi vitae massa imperdiet ex.

                  </p>
                  </div>




               

        </section>
       
        </section>
   
        
    
  )
}
