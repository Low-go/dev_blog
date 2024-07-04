import fs from 'fs';
import path from 'path';
import { remark } from remark;
import html from 'remark-html';

//function to get markdown files
const getMarkDownFiles = async () =>{
    const files = fs.readdirSync(path.join(process.cwd(), 'public/md_files'));
    const posts = [];

    for(const file of files){
        const filePath = path.join(process.cwd(), 'public/md_files', files);
        const fileContents = fs.readFileSync(filePath, 'utf8');

        const processedContent = await remark().use(html).process(fileContents);
        const contentHtml = processedContent.toString();

        const [date, title] = file.replace('.md', '').split('-');

        posts.push({ title, date, content: contentHtml}); //post populated wth respective parameters
    }

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default getMarkDownFiles;