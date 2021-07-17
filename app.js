const team = { // Create an empty team object.
    //2. Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.
    _players: [{ //Populate the empty array that corresponds to the _players key in your team object with three actual players. 
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    }
    ],
    _games: [{ //4. Populate the empty array that corresponds to the _games key in your object with three actual games. 
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }
    ],

    //5. Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    //6. We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    },

    //8. The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {  //creates a game object,
            opponent, //takes in an opponent’s name,
            teamPoints, //your team’s points,
            opponentPoints //the opponent’s points,
        }

        this.games.push(game); //adds the game object to your team‘s games array.
    }
};

//7 Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76. Print out the team‘s players to check they were all properly added.
team.addPlayer('Grisha', 'Voda', 28);
team.addPlayer('Stefan', 'Tepesh', 44);
team.addPlayer('Mircea', 'Imparatul', 76);

console.log(team.players);

//9 Invoke your addGame method on three games and print the team‘s updated games array.
team.addGame('Steaua', 44, 49);
team.addGame('Zimbru', 44, 33);
team.addGame('Dinamo', 44, 30);

console.log(team.games);