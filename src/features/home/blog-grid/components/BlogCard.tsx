import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../types/blog.types";
import {
  getBlogPostGradient,
  getBlogPostHoverColor,
} from "../utils/blog.utils";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  const IconComponent = post.icon;
  const gradient = getBlogPostGradient(index);
  const hoverColor = getBlogPostHoverColor(index);
  const isLarge = index < 2;

  return (
    <Link
      href={post.href}
      className={`${post.gridClass} relative overflow-hidden rounded-lg bg-gradient-to-br ${gradient} group transition-transform hover:scale-105`}
    >
      <Image
        src={post.image}
        alt={post.title}
        className={`w-full h-full object-cover ${
          post.id === 6 ? "opacity-85" : ""
        }`}
        width={1920}
        height={770}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          isLarge ? "from-black/60" : "from-black/60"
        } to-transparent`}
      ></div>
      <div
        className={`absolute ${
          isLarge ? "bottom-6 left-6" : "bottom-3 left-3"
        } text-white`}
      >
        <div className="flex items-center mb-2">
          <IconComponent
            className={isLarge ? "w-6 h-6 mr-2" : "w-4 h-4 mr-1"}
          />
          <span
            className={isLarge ? "text-sm font-medium" : "text-xs font-medium"}
          >
            {post.category}
          </span>
        </div>
        <h3
          className={`${
            isLarge ? "text-xl font-bold mb-2" : "text-sm font-bold"
          } ${hoverColor} transition-colors`}
        >
          {post.title}
        </h3>
      </div>
    </Link>
  );
};
