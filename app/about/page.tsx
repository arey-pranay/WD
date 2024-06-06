import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";
import aboutImage from "@/assets/avatar.png";
export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Pranay
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2 h-64 my-auto">
          {/* <Avatar className="h-48 w-48"> */}
          <Image
            height={600}
            width={600}
            className="rounded-full hover:scale-105 transition-all duration-200 hover:border-4 border-white hover:p-5"
            src={aboutImage}
            alt={siteConfig.author}
          />
          {/* <AvatarFallback>PP</AvatarFallback> */}
          {/* </Avatar> */}
          <h2 className="text-2xl mt-12 font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            FullStack Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Pranay is a dynamic computer science and engineering student at VIT
          Vellore, known for his passion and expertise in full-stack
          development. A recipient of the VIT Achiever award, he excels in both
          the MERN and T3 stacks, seamlessly blending frontend and backend
          skills. Though proficient in databases and server-side logic, his true
          love lies in crafting stunning and interactive frontend experiences.
          At his startup, MyCycle, a women&apos;s healthcare venture under
          VIT-TBI, Pranay leads design, web development, HR, and pitching,
          demonstrating his multifaceted talents. Certified as an AWS Cloud
          Practitioner, Pranay has a strong grasp of Data Structures,
          Algorithms, and Object-Oriented Programming in C++ and Java. His
          collaboration with McMaster University in Canada, where he explored
          Haskell and Elm to teach recursion to kids, ignited his fascination
          with 3D web technologies. Delving into three.js and React-three-fiber,
          Pranay continues to innovate, with a keen interest in the MindAR
          library, reflecting his ongoing quest for knowledge and creativity in
          web development.
        </p>
      </div>
    </div>
  );
}
