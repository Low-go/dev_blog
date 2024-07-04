import { remark } from 'remark';
import html from 'remark-html';

//function to get markdown files
const getMarkDownFiles = async () =>{
    const fileNames = ['test1.md'];
    const posts = [];

    for (const fileName of fileNames) {
      const response = await fetch(`/md_files/${fileName}`);
      const fileContents = await response.text();
  
      const processedContent = await remark().use(html).process(fileContents);
      const contentHtml = processedContent.toString();
  
      const [date, title] = fileName.replace('.md', '').split('-');
  
      posts.push({ title, date, content: contentHtml });
    }
  
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default getMarkDownFiles;