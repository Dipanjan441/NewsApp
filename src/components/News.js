import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    console.log('constructor');
    super();
    this.state = {
      articles : [],
      loader : this.false
    }
  }

  async componentDidMount(){
    console.log('component did mount');
    let url = 'GET https://newsapi.org/v2/top-headlines?country=us&apiKey=20b2a33070034aa296f1a041ab99d8f3';
    let data = await fetch(url);
    console.log(data);
    let parseData = await data.json();
    let parseData2 = JSON.parse(parseData);
    console.log(parseData2);
    this.setState = ({articles : parseData2.articles});
  }
  render() {
    // const {articles} = this.state;
    console.log('render');
    return (
      <div>
        <div className="container my-4">
          <h2 className="news-heading">NewsApp-Here are your all latest and <strong>Top Headlines</strong></h2>
        <div className="row mb-4">
            {this.state.articles.map((element)=>{
                // console.log(element);
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url}/>
              </div>
            })}
              
        </div>
        </div>
      </div>
    )
  }
}

export default News
