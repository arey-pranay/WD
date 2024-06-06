import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.gif";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-row justify-between items-center">
        <div className="pl-5 flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:-translate-y-2 transition-all duration-200"
            href="mailto:pranayparikh2004@gmail.com"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-8 w-8" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className="hover:-translate-y-2 transition-all duration-200"
          >
            <span className="sr-only">LinkedIn</span>
            {/* <Icons.twitter className="h-6 w-6" /> */}
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className="hover:-translate-y-2 transition-all duration-200"
          >
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-8 w-8" />
          </a>
        </div>
        <div className="text-md text-white py-2">
          <a href={siteConfig.links.personalSite} target="_blank">
            A &nbsp;{" "}
            <span className="hover:underline underline-offset-2 hover:underline-offset-4 transition-all duration-200">
              <b>Pranay Parikh </b>{" "}
            </span>
            &nbsp;Product
          </a>
        </div>
        <div>
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" /> */}
            <Image
              unoptimized={true}
              width={90}
              height={90}
              src={logo}
              alt="logoImage"
              // className="my-4"
            />
            {/* <span className="font-bold">{siteConfig.name}</span> */}
          </Link>
        </div>
      </div>
      <div className="bg-slate-400 w-full flex justify-center"></div>
    </footer>
  );
}
