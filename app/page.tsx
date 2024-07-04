import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import Image from "next/image";
import animBg from "@/assets/bg-light.gif";
import Heading from "@/components/Heading.jsx";
import "@/app/styles/h2.css";
import "@/app/styles/h1.css";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  const title1 = "Latest";
  const title2 = "Posts";
  return (
    <>
      <section className="relative h-screen flex  justify-center pb-24 ">
        <div className="absolute inset-0  ">
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
            Your go-to blog for mastering web development, from frontend magic
            to backend mastery, with tips, tutorials, and interactive guides.
          </p>
          <div
            className="flex  flex-col gap-4 justify-center sm:flex-row"
            style={{ zIndex: 1 }}
          >
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-fit hover:bg-transparent hover:border-2 border-white hover:text-white"
              )}
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
              View LinkedIn
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
        <h2 className="animated-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          {title1.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0}s` }}>
              {char}
            </span>
          ))}
          &nbsp; &nbsp;
          {title2.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0}s` }}>
              {char}
            </span>
          ))}
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
