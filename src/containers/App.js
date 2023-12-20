import React, { Component } from 'react';
import CardList from '../components/CardList';
import { Robots } from '../Robots';
import Nav from '../components/navbar';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Robots: Robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.Robots.filter(Robot => {
      return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.Robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
                <Nav searchChange={this.onSearchChange}/>
                <Scroll>
                  <CardList Robots={filteredRobots}/>
                </Scroll>
        </div>
    )
    }
  }
}

export default App;