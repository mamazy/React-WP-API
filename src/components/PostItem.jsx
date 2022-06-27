import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../components/portfolio/portfolio.css";

export class PostItem extends Component {
  state = {
    imgUrl: "",
    isLoaded: false,
  };

  static propTypes = {
    post: PropTypes.object.isRequired,
  };
  componentDidMount() {
    const { featured_media } = this.props.post;
    const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);

    Promise.all([getImageUrl]).then((res) => {
      this.setState({
        imgUrl: res[0].data.source_url,
        isLoaded: true,
      });
    });
  }

  render() {
    const { id, title, excerpt } = this.props.post;
    const { imgUrl, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <div className="portfolio__item-image">
            <img src={imgUrl} alt={title.rendered} />
          </div>
          <h3>{title.rendered}</h3>
          <h4>
            <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
          </h4>

          <div className="portfolio__item-cta">
            {/* //<a href="#top" className='btn'>Request</a>// */}
            <a
              href={`https://tolue.net/?p=${id}`}
              id="ID"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default PostItem;
