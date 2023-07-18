// Player class
class Player {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  // Player information
  const player = new Player("Apetroaei Cezar", 20);
  
  // Update player information on the page
  function updatePlayerInfo() {
    document.getElementById("playerName").textContent = player.name;
    document.getElementById("playerAge").textContent = "Age: " + player.age;
  }
  
  // Load player image
  document.getElementById("playerImage").src = "players_photos/apetroaei_cezar.jpeg";
  
  // Call the function to update player information
  updatePlayerInfo();
  