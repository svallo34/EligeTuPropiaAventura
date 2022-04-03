import React from "react";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Historial from "./Historial";
import data from "../data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    //Seteo el estado inicial (historia con id = 1)
    this.state = {
      id: 1,
      historia: data.find((element) => element.id === "1"),
      historiaAnterior: "",
      historial: [],
    };
    this.handleOpcionSeleccionada = this.handleOpcionSeleccionada.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    //Si hubo cambio de historia, agrego la ultima opción seleccionada al historial
    if (prevState.id !== this.state.id && this.state.opcionAnterior !== "") {
      this.state.historial.push(this.state.opcionAnterior);
    }
  }

  handleOpcionSeleccionada(opcion) {
    if (this.state.historia.opciones[opcion] === "FIN.") {
      let reiniciarHistoria = window.confirm(
        "Llegaste al final de la historia! Quieres volver al principio?"
      );
      if (reiniciarHistoria) {
        //Vuelvo al estado inicial
        this.setState({
          id: 1,
          historia: data.find((element) => element.id === "1"),
          opcionAnterior: "",
          historial: [],
        });
      }
    } else {
      //Incremento el id en 1
      let nuevoId = parseInt(this.state.id) + 1;
      this.setState({
        id: nuevoId,
        historia: data.find((element) => element.id === `${nuevoId}${opcion}`),
        opcionAnterior: opcion.toUpperCase(),
        // historial: this.state.historial.concat(opcion)
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <Historia textoHistoria={this.state.historia.historia} />
        <Opciones
          elegirOpcion={this.handleOpcionSeleccionada}
          opcionesHistoria={this.state.historia.opciones}
        />
        <Historial
          opcionAnterior={this.state.opcionAnterior}
          historial={this.state.historial}
        />
      </div>
    );
  }
}

export default Main;
