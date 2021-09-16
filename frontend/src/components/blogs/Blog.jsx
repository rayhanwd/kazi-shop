import React from 'react';
import BCard from './BCard';

const Blog = () => {
    return (
        <div className="container">
            <div className="blog-title">
                <h2>OUR LATEST BLOG</h2>
            </div>
            <div className="pb-8 flex flex-wrap justify-center">
            <BCard />
            <BCard />
            <BCard />
            </div>
        </div>
    )
}

export default Blog;
