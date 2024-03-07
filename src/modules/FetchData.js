import blogData from "../blogData/blogData.json"

const fetchAllBlogData = (startIndex, endIndex) => {
    if (startIndex !== undefined && endIndex !== undefined) {
        return blogData.articles.slice(startIndex, endIndex);
    } else if (startIndex !== undefined) {
        return blogData.articles.slice(startIndex);
    } else {
        return blogData.articles;
    }
};

export default fetchAllBlogData;