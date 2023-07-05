import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "100px 0px"}}>
        <img src={require("./images/loading.gif")} alt="" style={{height: "50px", width: "50px"}} />
      </div>
    )
  }
}

export default Loading