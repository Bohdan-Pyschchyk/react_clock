/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  date: string;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  interval = 0;

  componentDidMount() {
    this.interval = window.setInterval(() => {
      let { date } = this.state;

      date = new Date().toLocaleTimeString();

      console.log(date);

      this.setState({ date });
    }, 1000);
  }

  componentDidUpdate(prevState: Props) {
    if (prevState.name !== this.props.name) {
      console.log(`Renamed from ${prevState.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="clock">
        <p>{name}</p>
        <b>{'Time is: '}</b>
        {date}
      </div>
    );
  }
}
