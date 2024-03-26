import React from 'react'

const Blogcard = (props) => {
  return (
    
    <div className=' '>
      
      <article id="post-61" className="bg-white m-20 pl-20 pr-20  flex-row post-61 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
        <div className="flex shadow-lg rounded-lg">
          <div className="">
          <div className="">
            <a href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/" title="Why reselling used books is better than selling them to a scrap dealer?">
              <img className='w-[360px] h-[240px] rounded-lg shadow-lg hover:'
               src={props.imglink} class="attachment-hestia-blog size-hestia-blog wp-post-image" alt="Why reselling used books is better than selling them to a scrap dealer?" decoding="async" fetchpriority="high" srcset="https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-360x240.jpg 360w, https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-300x200.jpg 300w, https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-1024x683.jpg 1024w, https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-768x512.jpg 768w, https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala.jpg 1072w" sizes="(max-width: 360px) 100vw, 360px"/>
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








// <div className='m-20 '>
      
// <article id="post-61" className="bg-white m-20 p-20  flex-row post-61 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
//   <div className="flex shadow-lg rounded-lg">
//     <div className="">
//     <div className="">
//       <a href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/" title="Why reselling used books is better than selling them to a scrap dealer?">
//         <img className='w-[360px] h-[240px] rounded-lg shadow-lg hover:'
//          src="https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-360x240.jpg" class="attachment-hestia-blog size-hestia-blog wp-post-image" alt="Why reselling used books is better than selling them to a scrap dealer?" decoding="async" fetchpriority="high" srcset="https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-360x240.jpg 360w, https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-300x200.jpg 300w, https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-1024x683.jpg 1024w, https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-768x512.jpg 768w, https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala.jpg 1072w" sizes="(max-width: 360px) 100vw, 360px"/>
//         </a>
//         </div>
//         </div>
//         <div className="ml-8 w-1/2">
//           <h6 className="uppercase mb-2">
//             <a href="https://www.clankart.com/blog/category/uncategorized/" title="View all posts in Uncategorized" rel="tag">
//               Uncategorized</a>
//              </h6>
//              <h2 className="text-2xl ">
//               <a href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/" title="Why reselling used books is better than selling them to a scrap dealer?" rel="bookmark">
//                 Why reselling used books is better than selling them to a scrap dealer?</a>
//               </h2>
//               <div className="text-gray-400 text-sm mt-2">
//                 <p>Books are often an integral part of our lives because they provide us with education, amusement, and inspiration. But as time goes on, we often find ourselves accumulating a vast collection of old books that we no longer need or use. So at some time, we tempt to dispose of these books by just selling them to a scrap dealer. </p>
//               </div>
//                <div className="mt-6">
//                 By 
//                 <a href="https://www.clankart.com/blog/author/clankart/" title="Clankart" class="url">
//                   <b className="ml-2">AuthorName</b>
//                   </a>,
//                    <a href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/">
//                     <time className="ml-2 mr-2" datetime="2023-03-12T00:36:41+05:30" content="2023-03-12">1 year</time>
// ago
//                      </a>
//                      </div>
//                      </div>
//                      </div>
//                      </article>
// </div>
