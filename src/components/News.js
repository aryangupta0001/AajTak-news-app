import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from "./Loading";


export class News extends Component {

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      pageSize: 3
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7f3c5c6bfbd4eb09d89234855d036ba&age=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    });
  }

  /*
  prevPage = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7f3c5c6bfbd4eb09d89234855d036ba&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    })
  }
  
  nextPage = async() => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7f3c5c6bfbd4eb09d89234855d036ba&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1
    })
    
  }
  */
 
 prevPage = async () => {
   this.setState({
     page: this.state.page - 1
    }, () => {
      this.updateNews();
    });
    
  }
  
  nextPage = async () => {

    this.setState({
      page: this.state.page + 1
    }, () => {
      this.updateNews();
    })
  }
  
  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7f3c5c6bfbd4eb09d89234855d036ba&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    
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
            !this.state.loading && this.state.articles.map((element) => {
              
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={(element.title.length > 40 ? element.title.slice(0, 40) + "..." : element.title)}
                    description={(element.description === null) ? (element.description) : (element.description.length > 100 ? element.description.slice(0, 100) + "..." : element.description)}
                    imageUrl={element.urlToImage === null ? require("./images/default-news-image.jpg") : element.urlToImage}
                    newsUrl={element.url}
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

          <div style={{ fontSize: "18px", fontFamily: "'Open Sans', sans-serif" }}>{this.state.page} / {Math.ceil(this.state.totalArticles / this.state.pageSize)}</div>
          <button type="button"
            disabled={this.state.page === Math.ceil(this.state.totalArticles / this.state.pageSize)}
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