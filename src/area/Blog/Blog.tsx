import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard/BlogCard';
import FeaturedBlogCard from '../../components/BlogCard/FeaturedBlogCard';

function Blog() {
  return (
    <>
    <Header />
    <div className='container d-flex flex-wrap mt-5 mb-5 p-5 card-grey rounded-3 justify-content-center'>
        <h1 className='col-lg-12 text-center mb-4'>Blog and More...</h1>
        <section id='mainBlog' className='col-lg-12 d-flex flex-wrap'>
            <FeaturedBlogCard />
        </section>
    </div>
    <div id='otherBlogs' className='container d-flex flex-wrap mt-3 mb-5 p-2'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
    </div>
    <Footer />
    </>
  )
}

export default Blog