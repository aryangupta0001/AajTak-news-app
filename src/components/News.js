import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from "./Loading";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller';
import jsonData from './Sample.json'

import defaultNewsImage from './images/default-news-image.jpg';
import shwetaSingh1 from './images/shweta_singh_1.jpg';
import shwetaSingh2 from './images/shweta_singh_2.jpg';
import shwetaSingh3 from './images/shweta_singh_3.jpg';
import shwetaSingh4 from './images/shweta_singh_4.jpg';
import rl1 from './images/rl_1.jfif';
import rl2 from './images/rl_2.jfif';
import rl3 from './images/rl_3.jfif';
import rl4 from './images/rl_4.jfif';

const imageMap = {
  shwetaSingh1: shwetaSingh1,
  shwetaSingh2: shwetaSingh2,
  shwetaSingh3: shwetaSingh3,
  shwetaSingh4: shwetaSingh4,
  rl1: rl1,
  rl2: rl2,
  rl3: rl3,
  rl4: rl4,
};


export class News extends Component {

  newsArticles = []
  newsPage = 0
  newsLoading = true
  newsTotalArticles = 0

  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general"

  }


  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string

  }

  constructor(props) {
    super(props);

    document.title = `AajTak | ${this.props.title}`;

    this.state = {
      // articles: [],
      loading: true,
      // page: 1,
      totalArticles: 1000,
      // api: "e7f3c5c6bfbd4eb09d89234855d036ba",           //1
      // api: "fdf7b06eac3847bbbb8733478f641676",           //2
      api: "72fb1894d0b7482297edd8dd614d55da",           //3
      // api: "b5ec941c97a5433a9b5ebe68302ce143",           //4
      // api: "f9d598beb4bf4cb78701c48fa37175ec",           //5  
      // api: "b047f87941d64bca838116aa9f5439bf"            //6

    };
  }

  async componentDidMount() {
    console.log("Inside component did mount 1");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.newsArticles = parsedData.articles;
    this.newsTotalArticles = parsedData.totalResults;
    this.newsLoading = false

    this.setState({
      // articles: Articles.slice((this.state.page - 1) * 6, this.state.page * 6),
      // articles: Articles,
      // totalArticles: parsedData.totalResults,
      // loading: false
    })

    console.log("Inside component did mount 2");
  }


  // loadFunc = async () => {

  //   this.newsPage = this.newsPage + 1
  //   this.newsLoading = true
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   loading: true
  //   // });

  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${this.newsPage}&pageSize=${this.props.pageSize}`;

  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   let Articles = parsedData.articles;
  //   console.log(Articles);


  //   this.newsArticles = this.newsArticles.concat(Articles);
  //   this.newsLoading = false;

  //   this.forceUpdate();

  //   // this.setState({
  //   //   articles: this.state.articles.concat(Articles),
  //   //   loading: false
  //   // })
  // }


  loadFunc = async () => {
    this.newsPage = this.newsPage + 1;
    this.newsLoading = true;

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${this.newsPage}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    let Articles = parsedData.articles;

    this.newsArticles = this.newsArticles.concat(Articles);
    this.newsLoading = false;

    this.forceUpdate();
  }

  render() {
    return (
      <div className='container my-3' >
        <h1 style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
          Aaj Tak, Apke Ghar Tak
        </h1>

        {Object.values(imageMap).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=''
            style={{
              height: '75px',
              width: '75px',
              display: 'inline',
              borderRadius: '75px',
              marginLeft: '25px',
            }}
          />
        ))
        }

        < InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={this.newsArticles.length < this.newsTotalArticles}
          loader={< Loading key={this.newsPage} />}
          useWindow={true}
        >
          <div className="row container" style={{ margin: "50px auto" }} key={this.newsPage + 1}>
            {this.newsArticles.map((element, index) => {

              return (
                <div key={index}>
                  <NewsItem key={index + this.newsTotalArticles}
                    title={
                      // (element.title.split(" ").length > 10 ? element.title.split(" ").slice(0, 10).join(" ") + "..." : element.title)
                      element.title
                    }

                    description={
                      // (element.description === null) ? (element.description) : (element.description.split(" ").length > 25 ? element.description.split(" ").slice(0, 20).join(" ") + "..." : element.description)
                      element.description
                    }

                    imageUrl={(element.urlToImage === null || element.urlToImage === "") ? defaultNewsImage : element.urlToImage}
                    newsUrl={element.url}

                    author={(element.author === null) || (element.author === "") ? "Unknown" : element.author}

                    time={element.publishedAt}
                  />
                </div>
              )
            })
            }
          </div>
        </InfiniteScroll>
      </div >
    )
  }
}

export default News