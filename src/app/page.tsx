import {Image} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html";
import rehypeRaw from "rehype-raw"
import NavbarComponent from "../components/Navbar";
import FooterComponent from "@/components/Footer";
import "./globals.css";
import { getMarkdownContent } from "@/lib/getMarkdownContent";
import "./markdown.css"

export default async function Home() {
  const markdownContent = getMarkdownContent('home.md');
  return (
      <main className="flex flex-col items-center">
        <NavbarComponent></NavbarComponent>
        <div className="w-full mt-8 max-w-3xl flex flex-col items-center min-h-screen">


          {/* photo component */}
          <div className="flex px-5 mb-10 md:mb-5 w-full flex-col-reverse md:flex-row md:justify-between md:items-center">

            <div>
              <h1 className="text-2xl py-2">Steven Bai</h1>
              <h2 className="text-xl py-2">3rd-Year CS @ University of Waterloo</h2>
            </div>

            <Image
              src="/steven.jpg"
              className="rounded-full w-32 md:w-48 h-auto my-5 md:m-5"
              alt="steven profile picture"
            ></Image>


          </div>

          <ReactMarkdown 
            className="markdown-content"
            remarkPlugins={[remarkHtml]}
            rehypePlugins={[rehypeRaw]}
            components={{ a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />,
            }}
          >
            {markdownContent}
          </ReactMarkdown>

        </div>
        <FooterComponent></FooterComponent>
      </main>

  );
}
