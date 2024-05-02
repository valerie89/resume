function redirectToGamePage() {
  window.location.href = "game.html";
}

// Add click event listener to the "Start" button
$(".start").click(redirectToGamePage);

// Whack mole 1
$(".whack1").click(function () {
  $(".mole1").hide();
  setTimeout(function () {
    $(".mole1").show();
  }, 1000); 
});

// Whack mole 2
$(".whack2").click(function () {
  $(".mole-two").hide(); 
  setTimeout(function () {
    $(".mole-two").show(); 
  }, 1000); 
});

// Whack mole 3
$(".whack3").click(function () {
  $(".third-mole").hide();
  setTimeout(function () {
    $(".third-mole").show();
  }, 1000); 
});

// Reset the game
$(".reset").click(function () {
  $(".mole1").show();
  $(".mole-two").show(); 
  $(".third-mole").show();
});

$(document).ready(function () {
  // Show timer message for at least 6 seconds before starting the game
  $("#timer")
    .delay(5000)
    .fadeIn(500, function () {
      startGame(); // Call startGame function after 6 seconds
    });

  // Function to start the game
  function startGame() {
    let score = 0; 
    let whackCount = 0; 
    const whackLimit = 30; 
    const gameDuration = 20; 

    function updateScore() {
      $("#score").text("Score: " + score);
    }

    // Function to whack mole
    function whackMole(mole) {
      mole.hide();
      score += 10; 
      updateScore(); 
      whackCount++; 
      setTimeout(function () {
        mole.show(); 
      }, 1000); 
    }

    // Setting interval for mole to appear randomly
    setInterval(function () {
      let randomMole = Math.floor(Math.random() * 3) + 1; 
      whackMole($(".mole" + randomMole)); 
    }, 2000); 

    // Set countdown timer
    let timeLeft = gameDuration; // Set initial time left
    const countdownTimer = setInterval(function () {
      $("#timer").text("Time Left: " + timeLeft + "s");
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(countdownTimer); // Stop the timer
        if (whackCount >= whackLimit) {
          alert("Congratulations! You win!");
        } else {
          alert("Sorry! You lose!");
        }
      }
    }, 1000); //updates timer
  }
});
