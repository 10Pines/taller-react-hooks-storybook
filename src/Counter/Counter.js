import React, { useState } from "react";
import { HooplaButton } from "../HooplaButton/HooplaButton";

class CounterKeeper {
  constructor(initial) {
    this.counter = initial;
  }

  value() {
    return this.counter;
  }

  increase() {
    return new CounterKeeper(this.counter + 1);
  }

  reset() {
    return new CounterKeeper(0);
  }
}

const CounterHook = ({ danger }) => {
  const [counter, setCounter] = useState(new CounterKeeper(0));
  const increaseCounter = () => {
    setCounter(counter.increase());
  };
  const resetCounter = () => {
    setCounter(counter.reset());
  };
  return (
    <CounterView
      danger={danger}
      counter={counter}
      onIncrease={increaseCounter}
      onReset={resetCounter}
    />
  );
};

class CounterClass extends React.Component {
  state = {
    counter: new CounterKeeper(0),
  };

  componentDidMount() {
    console.log("The component mounted!");
  }

  componentDidUpdate() {
    console.log("The component updated!");
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter.increase() });
  };

  resetCounter = () => {
    this.setState({ counter: this.state.counter.reset() });
  };

  render() {
    return (
      <CounterView
        danger={this.props.danger}
        counter={this.state.counter}
        onIncrease={this.increaseCounter}
        onReset={this.resetCounter}
      />
    );
  }
}

const CounterView = ({ counter, onIncrease, onReset, danger }) => {
  const numberIsRed = counter.value() >= 5;
  const border = danger ? "border-danger" : "border-success";

  return (
    <div className={`border ${border} d-flex flex-column align-items-center`}>
      <h1>Contador</h1>
      <h2 className={numberIsRed ? "text-danger" : ""}>{counter.value()}</h2>
      <HooplaButton onClick={onIncrease}>Count</HooplaButton>
      <HooplaButton onClick={onReset}>Restart</HooplaButton>
    </div>
  );
};

// Elegir si exportar la implementacion en hooks o la de clase
// export default CounterClass;
export default CounterHook;
