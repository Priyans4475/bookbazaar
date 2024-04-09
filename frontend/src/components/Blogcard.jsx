import React from 'react'

const Blogcard = (props) => {
  return (
    
    <div className=''>
      
      <article id="post-61" className="bg-white m-20 pl-20 pr-20  flex-row post-61 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized z-1  ">
        <div className="flex shadow-lg rounded-lg opacity-100 z-99">
          <div className="">
          <div className="">
            <a  title="Why reselling used books is better than selling them to a scrap dealer?">
              <img className='w-[360px] h-[240px] rounded-lg shadow-lg hover:'
               src={props.imglink} class="attachment-hestia-blog size-hestia-blog wp-post-image w-80 h-60 " alt="Why reselling used books is better than selling them to a scrap dealer?" decoding="async" fetchpriority="high"  sizes="(max-width: 360px) 100vw, 360px"/>
              </a>
              </div>
              </div>
              <div className="ml-8 w-1/2">
                <h6 className="uppercase mb-2">
                  <a href="https://www.clankart.com/blog/category/uncategorized/" title="View all posts in Uncategorized" rel="tag">
                    {props.category}</a>
                   </h6>
                   <h2 className="text-2xl ">
                    <a href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/" title="Why reselling used books is better than selling them to a scrap dealer?" rel="bookmark">
                     {props.title}</a>
                    </h2>
                    <div className="text-gray-400 text-sm mt-2">
                      <p>{props.description
                      }</p>
                    </div>
                     <div className="mt-6">
                      By 
                      <a href="https://www.clankart.com/blog/author/clankart/" title="Clankart" class="url">
                        <b className="ml-2">{props.publisher}</b>
                        </a>,
                         <a href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/">
                          <time className="ml-2 mr-2" datetime="2023-03-12T00:36:41+05:30" content="2023-03-12">{props.Date}</time>
 
                           </a>
                           </div>
                           </div>
                           </div>
                           </article>
    </div>
  
  )
}

export default Blogcard


