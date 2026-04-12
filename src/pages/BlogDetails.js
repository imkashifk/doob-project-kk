import React from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import BlogDetailsContent from '../components/blog/BlogDetailsContent';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import Error from "./Error";

const BlogDetails = ({match: {params: {id}}}) => {
    const blogId = parseInt(id, 10)
    const data = BlogClassicData.filter(blog => blog.id === blogId);
    if (!data[0]) {
        return <Error />;
    }
    return (
        <>
            <SEO title="Blog Details" />
            <Layout>
                <div className="rn-blog-details-area">
                    <BlogDetailsContent data={data[0]}  />
                </div>
            </Layout>
        </>
    )
}
export default BlogDetails;