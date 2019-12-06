import React from "react";
import axios from "axios";
import PlayerCard from './PlayerCard'
class PlayerList extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({players:res.data})
      })
      .catch(err => {
        console.log(err);
      });
  }
 
  render() {
      return (
      
      
        this.state.players.map(player => {
            const { id } = player;
            return (
            <PlayerCard key = {id} data = {player} />
          )
        })
      )
}};
export default PlayerList;