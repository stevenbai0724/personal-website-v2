import {Link} from "@nextui-org/link"
import {Button} from "@nextui-org/button"
import { FaGithub, FaLinkedin, FaEnvelopeOpenText, FaPaperclip  } from "react-icons/fa";
import "../app/globals.css";

function FooterComponent() {
  return (
      <div className="h-32 w-full max-w-3xl border-t-1 border-white flex justify-between items-top px-4 mt-16">
        <div className="pt-4">
          <div className="text-small pb-3 pt-1 md:pt-2">&copy; 2021-2024 Steven Bai</div>
          <div className="flex">
            <Link href="https://github.com/stevenbai0724" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl mx-1 hover:text-gray-400" />
            </Link>
            <Link href="https://www.linkedin.com/in/steven-bai-787515210/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl mx-1 hover:text-gray-400" />
            </Link>
            <Link href="mailto:s2bai@uwaterloo.ca">
              <FaEnvelopeOpenText className="text-2xl mx-1 hover:text-gray-400" />
            </Link>
            <Link href="/stevenbairesume.pdf" target="_blank" rel="noopener noreferrer">
              <FaPaperclip className="text-2xl mx-1 hover:text-gray-400" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row pt-4  h-auto">
            <Link className="text-small p-1 md:p-2" href="/">
              Home
            </Link>
            <Link className="text-small p-1 md:p-2" href="/projects">
              Projects
            </Link>
            <Link className="text-small p-1 md:p-2" href="/blog">
              Blog
            </Link>
            <Link className="text-small p-1 md:p-2" href="https://www.youtube.com/@stevenbai0724">
              YouTube
            </Link>
        </div>

      </div>
  )
}

export default FooterComponent