import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import "../../globals.css";
import NavbarComponent from "@/components/Navbar";
import FooterComponent from "@/components/Footer";
import "../../../../content/blog/blog.css"
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"

const getBlogPost = (id: any) => {
  const markdownWithMeta = fs.readFileSync(path.join('content/blog', `${id}.md`), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { frontmatter, content };
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('content'));
  return files.filter(file => file.endsWith('.md')).map((file) => ({
    id: file.replace('.md', ''),
  }));
}

const BlogPost = ({ params }) => {
  const { id } = params;
  const { frontmatter, content } = getBlogPost(id);

  return (
    <main className="flex min-h-screen flex-col items-center">
        <NavbarComponent></NavbarComponent>

        <div className="w-full max-w-3xl md:mt-16 mt-8 items-center justify-between min-h-screen">

            <ReactMarkdown
                className="blog"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{ 
                              a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />,
                              img: ({node, ...props}) => (<span className="thumbnail-box"><img {...props} className="thumbnail"/></span>)
            }}
                >{content}
            </ReactMarkdown>
        </div>
        <FooterComponent></FooterComponent>
    </main>

  );
};

export default BlogPost;
