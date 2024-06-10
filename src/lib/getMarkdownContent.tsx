// lib/getMarkdownContent.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getMarkdownContent = (fileName: string) => {
  const filePath = path.join(process.cwd(), 'content', fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  return content;
};
