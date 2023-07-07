import React, { Component } from 'react';

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, time } = this.props;
        return (
            // <div>
            //     <div className="card" style={{ width: "18rem", margin: "15px auto" }}>
            //         <img src={imageUrl} className="carsd-img-top" style={{ width: "100%", height: "160px" }} alt="..." />
            //         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            //             {author}
            //         </span>
            //         <div className="card-body">
            //             <h5 className="card-title">{title}</h5>
            //             <p className="card-text" >{description}</p>
            //             <p className="card-text" style={{ marginBottom: "0px" }}>
            //                 <small className="text-body-secondary">By {author}</small>
            //             </p>
            //             <p className="card-text">
            //                 <small className="text-body-secondary">{new Date(time).toGMTString()}</small>
            //             </p>
            //             <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
            //         </div>
            //     </div>
            // </div>
            // <div className="card mb-3" style={{ maxWidth: "540px" }}>
            //     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            //         {author}
            //     </span>
            //     <div className="row g-0">
            //         <div className="col-md-4">
            //             <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            //         </div>
            //         <div className="col-md-8">
            //             <div className="card-body">
            //                 <h5 className="card-title">{title}</h5>
            //                 <p className="card-text">{description}</p>
            //                 <p className="card-text" style={{ marginBottom: "0px" }}>
            //                     <small className="text-body-secondary">By {author}</small>
            //                 </p>
            //                 <p className="card-text">
            //                     <small className="text-body-secondary">{new Date(time).toGMTString()}</small>
            //                 </p>
            //                 <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div style={{ display: "flex", margin: "10px 0px", height: "30vh", padding: "5px", justifyContent: "space-between", borderRadius: "30px", backgroundColor: "beige"}}>
                <div style={{ display: "flex", width: "20%", alignItems: "center" }} >
                    <img src={imageUrl} alt="" style={{ maxWidth: "100%" }} />
                </div>

                <div style={{ width: "78%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                    <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text" style={{ fontSize: "1.15rem" }}>{description}</p>
                    </div>



                    <div style={{ height: "30%", display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <p style={{margin: "0"}}>
                                <small className="text-body-secondary">By {author}</small>
                            </p>

                            <p style={{margin: "0"}}>
                                <small className="text-body-secondary">{new Date(time).toGMTString()}</small>
                            </p>
                        </div>

                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "40%"}}>
                            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm" >Read More</a>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewsItem
