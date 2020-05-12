import React, { useState } from "react";
import { HooplaButton } from "../HooplaButton/HooplaButton";

class CounterKeeper {
  constructor(initial) {
    this.counter = initial;
  }

  valor() {
    return this.counter;
  }

  sumar() {
    return new CounterKeeper(this.counter + 1);
  }

  resetear() {
    return new CounterKeeper(0);
  }
}

const CounterHook = ({ peligro }) => {
  const [counter, setCounter] = useState(new CounterKeeper(0));
  const sumarContador = () => {
    setCounter(counter.sumar());
  };
  const resetearContador = () => {
    setCounter(counter.resetear());
  };
  return (
    <CounterView
      peligro={peligro}
      counter={counter}
      sumar={sumarContador}
      resetear={resetearContador}
    />
  );
};

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: new CounterKeeper(0),
    };
  }

  componentDidMount() {
    console.log("El componente monto!");
  }

  componentDidUpdate() {
    console.log("El componente se actualizo!");
  }

  sumarContador = () => {
    this.setState({ counter: this.state.counter.sumar() });
  };

  resetearContador = () => {
    this.setState({ counter: this.state.counter.resetear() });
  };

  render() {
    return (
      <CounterView
        peligro={this.props.peligro}
        counter={this.state.counter}
        sumar={this.sumarContador}
        resetear={this.resetearContador}
      />
    );
  }
}

const CounterView = ({ counter, sumar, resetear, peligro }) => {
  const numeroRojo = counter.valor() >= 5;
  const borde = peligro ? "border-danger" : "border-success";

  return (
    <div className={`border ${borde} d-flex flex-column align-items-center`}>
      <h1>Contador</h1>
      <h2 className={numeroRojo ? "text-danger" : ""}>{counter.valor()}</h2>
      <HooplaButton onClick={sumar}>Contar</HooplaButton>
      <HooplaButton onClick={resetear}>Reiniciar</HooplaButton>
    </div>
  );
};

// Elegir si exportar la implementacion en hooks o la de clase
export default CounterClass;
// export default CounterHook;
