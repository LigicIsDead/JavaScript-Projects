//Creating an object for the team 
const team = {
    _players: [
      (player1 = { firstName: "John", lastName: "Smith", age: 22 }),
      (player2 = { firstName: "David", lastName: "Pyker", age: 19 }),
      (player3 = { firstName: "Sam", lastName: "Twit", age: 20 }),
    ],
    _games: [
      (game1 = { opponent: "SportsBallTeam1", teamPoints: 2, opponentsPoints: 1 }),
      (game2 = { opponent: "SportsBallTeam2", teamPoints: 1, opponentsPoints: 3 }),
      (game3 = { opponent: "SportsBallTeam3", teamPoints: 5, opponentsPoints: 0 }),
    ],
    get players() { //Getter for players
      return this._players
    },
    get games() { //Getter for games
      return this._games
    },
    addPlayer (newFirstName, newLastName, newAge) { //Adding new player to team
      let player = {
        fistName: newFirstName,
        lastName: newLastName,
        age: newAge,
      }
      this.players.push(player)
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) { //Adding new game to team
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      }
      this.games.push(game)
    }
  };
  //Adds player and game
  team.addPlayer('Bugs', 'Bunny',  76)
  team.addGame('SportsBallTeam4', 2, 4)

  //Checks if the code worked
  console.log(team.players)
  console.log(team.games)