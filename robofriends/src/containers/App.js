import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import Scroll from "../components/Scroll";
import './App.js';

// App är ägare till state / anv man class går det att anv constructor
class App extends Component {
  constructor() {
    // Super måste stå ovan this för att det skall funka
    super();
    this.state = {
        // Detta är vad som ändras i Appen
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


  // Anv den här funktionen när du har egna metoder / Den här funktionen körs när det blir förändringar i search fieldet
  onSearchChange = (event) => {
    // när man behöver få ändringar i search field
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;
