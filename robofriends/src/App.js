import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";


// App är ägare till state / anv man class går det att anv constructor
class App extends Component {
  constructor() {
    // Super måste stå ovan this för att det skall funka
    super();
    this.state = {
        // Detta är vad som ändras i Appen
      robots: robots,
      searchfield: "",
    };
  }

  // Anv den här funktionen när du har egna metoder / Den här funktionen körs när det blir förändringar i search fieldet
  onSearchChange = (event) => {
    // när man behöver få ändringar i search field
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* This comment describes what the following component does */}
        {/* this kan nu sättas in nedan pga av constructorn */}
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
