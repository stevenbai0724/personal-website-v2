import "../globals.css";
import NavbarComponent from "../../components/Navbar";
import FooterComponent from "@/components/Footer";
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const getBlogPosts = () => {
  const filePath = path.join(process.cwd(), 'content/blog', 'blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

export type blogPost = {
    id: string,
    title: string,
    date: string,
    content: string,
    tags?: string[],
}
export default function Blog() {
    const blogPosts: blogPost[] = getBlogPosts();

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavbarComponent></NavbarComponent>

            <div className="w-full max-w-3xl md:mt-16 mt-8 items-center justify-between min-h-screen">

                <h1 className="text-2xl pt-5 px-5">Blog</h1>

                <ul>
                    {
                        blogPosts.map((post: blogPost) => (
                            <li className="px-5" key={post.id}>
                                <Link href={`/blog/${post.id}`}>
                                    {post.title}
                                </Link>
                            </li>)
                        )
                    }
                </ul>
            </div>
            <FooterComponent></FooterComponent>
        </main>

    )
}