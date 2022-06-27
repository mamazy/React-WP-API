import React, { Component } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import "../components/portfolio/portfolio.css";

export class Posts extends Component {
  state = {
    post: [],
    isLoaded: false,
  };
  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/posts")
      .then((res) =>
        this.setState({
          posts: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { id, posts, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <section key={id} id="portfolio">
          <h5>My Recent work</h5>
          <h2>Portfolio</h2>
          <div className="container portfolio__container">
            {posts.map((post) => (
              <article className="portfolio__item">
                <PostItem key={id} post={post} />
              </article>
            ))}
          </div>
        </section>
      );
    }
    return (
      <center>
        <br />
        <br />
        <h3>Loading ...</h3>
      </center>
    );
  }
}

export default Posts;
