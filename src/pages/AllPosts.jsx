import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../component';
import appwriteService from "../appwrite/conifg";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts()
      .then((response) => {
        if (response) {
          setPosts(response.documents);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <PostCard {...post} />
              </div>
            ))
          ) : (
            <p className='text-center w-full text-gray-500'>No posts available</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
