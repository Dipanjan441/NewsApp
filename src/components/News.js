import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
          <h2 className="news-heading">NewsApp-Here are your all latest and <strong>Top Headlines</strong></h2>
        <div className="row mb-4">
            <div className="col-md-4">
              <NewsItem title={"mytitle"} description={"mydescription"}/>
            </div>
            <div className="col-md-4">
              <NewsItem title={"mytitle"} description={"mydescription"}/>
            </div>
            <div className="col-md-4">
              <NewsItem title={"mytitle"} description={"mydescription"}/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
              <NewsItem title={"mytitle"} description={"mydescription"}/>
            </div>
            <div className="col-md-4">
              <NewsItem title={"mytitle"} description={"mydescription"}/>
            </div>
            <div className="col-md-4">
              <NewsItem title={"mytitle"} description={"mydescription"}/>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default News
