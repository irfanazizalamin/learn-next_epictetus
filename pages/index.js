import { useState } from "react";
import FeaturedPost from "@/components/FeaturedPost";
import CardPost from "@/components/CardPost";
import Layout from "../components/Layout";

import mockPosts from "../utils/posts.json";

const Home = () => {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <section className="container mx-auto px-4 md:px-0">
        <FeaturedPost />
      </section>

      <section className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap -mx-4 mt-[60px]">
          {posts &&
            posts.map((post) => (
              <div key={post.id} className="w-full md:w-1/3 px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
