import fs from "fs";

//components
export default function renderPage(pagePath, tabTitle) {
    const navbar = fs.readFileSync("./public/components/navbar.html").toString()
        .replace("$TAB_TITLE", tabTitle);
    const footer = fs.readFileSync("./public/components/footer.html").toString();
    const page = fs.readFileSync(pagePath).toString();
    
    return navbar + page + footer;
};