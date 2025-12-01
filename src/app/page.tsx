import { Hero } from "@/features/hero";
import { Categories } from "@/features/categories";
import { BlogGrid } from "@/features/blog-grid";
import { StoreSection } from "@/features/store-section";
import { Companies } from "@/features/companies";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BlogGrid />
      <StoreSection />
      <Companies />
    </>
  );
}
