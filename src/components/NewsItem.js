import React, { Component } from 'react';

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, time } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem", margin: "15px auto" }}>
                    <img src={imageUrl} className="carsd-img-top" style={{ width: "100%", height: "160px" }} alt="..." />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {author}
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className="card-text" >{description}</p>

                        <p className="card-text" style={{ marginBottom: "0px" }}>
                            <small className="text-body-secondary">By {author}</small>
                        </p>

                        <p className="card-text">
                            <small className="text-body-secondary">{new Date(time).toGMTString()}</small>
                        </p>

                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem