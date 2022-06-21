import React, { Component } from 'react';
import PageItem from './PageItem';
import axios from 'axios';

export class Pages extends Component {
    state={
        pages: [],
        isLoaded: false
    }
    componentDidMount(){
        axios.get('/wp-json/wp/v2/pages')
        .then(res => this.setState({
            pages: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    };
    
  render() {
    const { id, pages, isLoaded}= this.state;
    if (isLoaded){
        return (
      <section key={id} id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'> 
    {pages.map(page => (
        <article className='portfolio__item'>
        <PageItem key={page.id} page={page} />
        </article>
    ))}
      </div>
      </section>
    );
    }
return <h3>Loading ...</h3>
  }
}
export default Pages
