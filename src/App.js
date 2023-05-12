import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstName: 'MindaugasFirstState',
        lastName: 'MindaugasLastState'
      },
      company: 'MiU freelancerState'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, my name is { this.state.name.firstName } { this.state.name.lastName }! I work at company { this.state.company }.</p>
          <button onClick={
            () => {
              this.setState( () => {
                return {
                  name: {
                    firstName: 'MindaugasFirstOnClick',
                    lastName: 'MindaugasLastOnClick'
                  },
                  company: 'MiU freelancerOnClick'
                }
              },
              () => { console.log(this.state) })
            }
          }
          >Change name and company</button>
        </header>
      </div>
    );
  }
}

export default App;
