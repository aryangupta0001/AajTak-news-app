import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from "./Loading";
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"

  }


  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }


  constructor() {
    super();

    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);


    this.state = {
      articles: [],
      loading: true,
      page: 1,
      // api : "e7f3c5c6bfbd4eb09d89234855d036ba",      //1
      // api: "fdf7b06eac3847bbbb8733478f641676",           //2
      api: "72fb1894d0b7482297edd8dd614d55da"           //3
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      // totalArticles: 33,
      loading: false
    });
  }

  prevPage = async () => {
    this.setState({
      page: this.state.page - 1
    }, () => {
      this.updateNews();
    });

    let a = "java"

    console.log(a)

  }

  nextPage = async () => {

    this.setState({
      page: this.state.page + 1
    }, () => {
      this.updateNews();
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


  render() {
    return (
      <div className='container my-3'>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
          <h1>
            Aaj Tak, Apke Ghar Tak
          </h1>

          <img src={require('./images/shweta_singh_1.jpg')} alt="" style={{ height: "75px", width: "75px", display: "inline", borderRadius: "75px", marginLeft: "25px" }} />
          <img src={require('./images/shweta_singh_2.jpg')} alt="" style={{ height: "75px", width: "75px", display: "inline", borderRadius: "75px", marginLeft: "25px" }} />
          <img src={require('./images/shweta_singh_3.jpg')} alt="" style={{ height: "75px", width: "75px", display: "inline", borderRadius: "75px", marginLeft: "25px" }} />
          <img src={require('./images/shweta_singh_4.jpg')} alt="" style={{ height: "75px", width: "75px", display: "inline", borderRadius: "75px", marginLeft: "25px" }} />
          <img src={require('./images/rl_1.jfif')} alt="" style={{ height: "75px", width: "75px", display: "inline", borderRadius: "75px", marginLeft: "25px" }} />
          <img src={require('./images/rl_2.jfif')} alt="" style={{ height: "75px", width: "75px", display: "inline", borderRadius: "75px", marginLeft: "25px" }} />
          <img src={require('./images/rl_3.jfif')} alt="" style={{ height: "75px", width: "75px", display: "inline", borderRadius: "75px", marginLeft: "25px" }} />
          <img src={require('./images/rl_4.jfif')} alt="" style={{ height: "75px", width: "75px", display: "inline", borderRadius: "75px", marginLeft: "25px" }} />
        </div>



        {this.state.loading && <Loading />}



        <div className="row container" style={{ margin: "50px auto" }}>
        {
          // this.state.articles.map((element) => {
          !this.state.loading && this.state.articles.map((element) => {

            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    (element.title.split(" ").length > 10 ? element.title.split(" ").slice(0, 10).join(" ") + "..." : element.title)
                  }

                  description={
                    (element.description === null) ? (element.description) : (element.description.split(" ").length > 25 ? element.description.split(" ").slice(0, 20).join(" ") + "..." : element.description)
                  }

                  imageUrl={(element.urlToImage === null || element.urlToImage === "") ? require("./images/default-news-image.jpg") : element.urlToImage}
                  newsUrl={element.url}

                  author={(element.author === null) || (element.author === "") ? "Unknown" : element.author}

                  time={element.publishedAt}
                />
              </div>
            )
          })
        }

        </div>

        <div className="d-flex justify-content-between align-items-center" style={{ margin: "50px 0px" }}>

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
        </div>

      </div>
    )
  }
}

export default News