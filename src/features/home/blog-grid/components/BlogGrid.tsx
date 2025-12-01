import { BLOG_POSTS } from "../constants/blog-posts.constants";
import { BlogCard } from "./BlogCard";

export const BlogGrid = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 grid-rows-3 gap-4 h-[600px]">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
