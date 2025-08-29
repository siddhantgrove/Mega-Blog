import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/conifg";
import { Container, PostCard } from "../component";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((res) => {
      if (res) setPosts(res.documents);
    });
  }, []);

  // Empty state
  if (posts.length === 0) {
    return (
      <div className="w-full py-16 text-center">
        <Container>
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            No posts available
          </h1>
          <p className="text-gray-500 text-lg">
            Please login to view posts or check back later.
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-12 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Latest Posts
        </h2>
        <div className="flex flex-wrap -mx-2">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PostCard
                {...post}
                className="transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
