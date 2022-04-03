import React from "react";

class Historia extends React.Component {
  render() {
    return (
      <div>
        <h1 className="historia">{this.props.textoHistoria}</h1>
      </div>
    );
  }
}

export default Historia;
