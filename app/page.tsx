import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import Image from "next/image";
import animBg from "@/assets/bg-light.gif";
import Heading from "@/components/Heading.jsx";
export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="relative h-screen flex  justify-center pb-24 ">
        <div className="absolute inset-0 z-10 ">
          <Image
            src={animBg}
            layout="fill"
            objectFit="cover"
            alt="backgroundImage"
            className="opacity-20"
          />
        </div>
        <div className="container flex flex-col gap-4 justify-start text-center my-auto ">
          <Heading />

          <p className="max-w-[62rem] mx-auto text-muted-foreground sm:text-xl mt-7 mb-4 text-balance">
            Hola, Dive into the latest trends, tips, and tutorials in web
            development, where we make complex concepts simple and accessible
            for developers of all levels.
          </p>
          <div className="z-10 flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Read Blogs
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              My LinkedIn
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
