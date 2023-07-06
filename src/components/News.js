import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from "./Loading";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller';

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

  static defaultProps = {
    country: "in",
    pageSize: 6,
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

    // this.prevPage = this.prevPage.bind(this);
    // this.nextPage = this.nextPage.bind(this);

    document.title = `AajTak | ${this.props.title}`;


    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0,
      // api: "e7f3c5c6bfbd4eb09d89234855d036ba",           //1
      // api: "fdf7b06eac3847bbbb8733478f641676",           //2
      // api: "72fb1894d0b7482297edd8dd614d55da",           //3
      // api: "b5ec941c97a5433a9b5ebe68302ce143",           //4
      // api: "f9d598beb4bf4cb78701c48fa37175ec",           //5  
      // api: "b047f87941d64bca838116aa9f5439bf"            //6
    };
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    });
  }

  async prevPage() {
    this.setState({
      page: this.state.page - 1
    }, () => {
      this.updateNews();
    });

  }

  async nextPage() {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.fetchMoreData();
    })
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true,
    })

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false
    })
  }

  loadFunc = async () => {
    this.setState({
      page: this.state.page + 1
    })

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true,
    })

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false
    })
  }


  render() {
    return (
      <div className='container my-3'>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
          <h1>
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
          ))}

        </div>

        {/* {this.state.loading && <Loading />} */}

        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.nextPage}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Loading />}
        > */}

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Loading />}
          useWindow={false}
        >


          <div className="row container" style={{ margin: "50px auto" }}>
            {this.state.articles.map((element, index) => {

              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={
                      (element.title.split(" ").length > 10 ? element.title.split(" ").slice(0, 10).join(" ") + "..." : element.title)
                    }

                    description={
                      (element.description === null) ? (element.description) : (element.description.split(" ").length > 25 ? element.description.split(" ").slice(0, 20).join(" ") + "..." : element.description)
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

        {/* <div className="d-flex justify-content-between align-items-center" style={{ margin: "50px 0px" }}>

        <button type="button"
          disabled={this.state.page === 1} className="btn btn-dark"
          onClick={this.prevPage}>
          &larr; Previous
        </button>

        <div style={{ fontSize: "18px", fontFamily: "'Open Sans', sans-serif" }}>{this.state.page} / {Math.ceil(this.state.totalArticles / this.props.pageSize)}</div>
        <button type="button"
          disabled={this.state.page === Math.ceil(this.state.totalArticles / this.props.pageSize)}
          className="btn btn-dark"
          onClick={this.nextPage}>
          Next &rarr;
        </button>
      </div> */}

      </div>
    )
  }
}

export default News