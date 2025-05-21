// import Image from "next/image";
// import {useEffect,useState} from 'react';
import Link from "next/link";


const GetData = props => {
  return (
      <>
        <h2> get data </h2>
        <ul>
              {
                  props.posts.map(post => {
                      // @ts-ignore
                      // @ts-ignore
                      return (
                          <li key={post.id}>
                              <Link href='/book/[title]' as={`/book/${post.id}`}>
                                  {post.title}
                              </Link>
                          </li>
                      )
                      }
                  )
              }
          </ul>
      </>
  )
}
export async  function getServerSideProps(){
    let res=await  fetch('https://jsonplaceholder.typicode.com/posts')
    let posts=await res.json();
    // console.log(posts);
    return {
        props:{
            posts
        }
    }
}
export default  GetData;