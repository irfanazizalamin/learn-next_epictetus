import { useState } from "react";
import Heaed from "next/head";

import Layout from "../components/Layout";
import CardPost from "@/components/CardPost";

import mockPosts from "../utils/posts.json";
import SectionHeader from "../components/SectionHeader";

export default function Posts() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Epictetus</title>
      </Head>

      <section className="container mx-auto px-4 md:px-0">
        <SectionHeader>UI design</SectionHeader>

        {posts.length ? (
          <div className="flex flex-wrap -mx-4 mt-[60px]">
            {posts &&
              posts.map((post) => (
                <div className="w-full md:w-1/3 px-4 py-6">
                  <CardPost {...post} />
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-[64px]">No result 😥</h2>
            <p className="md:w-1/2 mx-auto text-[20px] leading-[30px] text-white/60">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        )}
      </section>
    </Layout>
  );
}
