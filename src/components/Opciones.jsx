import React from "react";

class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button
            id="A"
            className="botones"
            onClick={() => this.props.elegirOpcion("a")}
          >
            A
          </button>
          <h2>{this.props.opcionesHistoria.a}</h2>
        </div>
        <div className="opcion">
          <button
            id="B"
            className="botones"
            onClick={() => this.props.elegirOpcion("b")}
          >
            B
          </button>
          <h2>{this.props.opcionesHistoria.b}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;
