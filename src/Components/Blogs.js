import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";
import "../styling/blogs.css";

const Blogs = () => {
  const searchInput = useSelector(selectUserInput);
  const blog_url = `https://gnews.io/api/v4/search?q="${searchInput}"&lang=en&country=us&max=10&apikey=19b9f8a7ae4d12e6ac868c297bbfa90d`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div className="blog-page">
      <h1 className="blog-page-header">Blogs</h1>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a key={blog.title} href={blog.url} target="blank" className="blog">
            <img src={blog.image} alt="blogImage" />
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <p>{blog.description}</p>
              </h3>
            </div>
          </a>
        ))}
        {blogs?.totalArticles === 0 && (
          <h1 className="no-blogs">
            No Blogs available😯. Search something else to read blogs on the
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
