let pic;
let question = "Click the best fruit";
let number = 1;

function preload() {
  pic = loadImage("assets/fruits.png"); 
}

function setup() {
  createCanvas(900, 900); // 
  textSize(22);
}

function draw() {
  background(255);

  // Soru yazısı
  fill(0);
  text(question, 20, 40);

  // Görsel 50 px aşağıda
  image(pic, 0, 50);
}

function mouseClicked() {
  // -------------------------
  // QUESTION 1 – FRUITS
  // -------------------------
  if (number === 1) {

    // 🍇 GRAPES (0–110, 50–200)
    if (mouseX >= 0 && mouseX < 110 && mouseY >= 50 && mouseY < 200) {
      output("No, grapes are too sour 🍇");
    }

    // 🍎 APPLE (90–200, 50–180)
    else if (mouseX >= 90 && mouseX < 200 && mouseY >= 50 && mouseY < 180) {
      output("No, apples are sour 🍎");
    }

    // 🍌 BANANA (0–100, 170–299)
    else if (mouseX >= 0 && mouseX < 100 && mouseY >= 170 && mouseY < 299) {
      output("No, bananas are bland 🍌");
    }

    // 🍒 CHERRIES (90–200, 180–299)
    else if (mouseX >= 90 && mouseX < 200 && mouseY >= 180 && mouseY < 299) {
      output("Right, cherries are sweet! 🍒🍒🍒");

      pic = loadImage("assets/ostrich.jpg");
      question = "Where is the ostrich? 🐦";
      number++;
    }

    else {
      output("You missed!");
    }

  }


  // Question 2
  else if (number === 2) {
    if (mouseX > 80 && mouseX < 220 && mouseY > 40 && mouseY < 140) {
      output("Right - That's the ostrich! 🐦");
      pic = loadImage("assets/sports.jpg");
      question = "Find American Football";
      number++;
    } else output("No, try again");
  }

  // Question 3
  else if (number === 3) {
    if (mouseX > 35 && mouseX < 125 && mouseY > 130 && mouseY < 190) {
      output("Correct 🏈");
      pic = loadImage("assets/drinks.jpg");
      question = "Which one is raspberry juice?";
      number++;
    } else output("No");
  }

  // Question 4
  else if (number === 4) {
    if (mouseX > 215 && mouseX < 300 && mouseY > 70 && mouseY < 200) {
      output("Correct");
      pic = loadImage("assets/mc.jpg");
      question = "Which one is the Enderman?";
      number++;
    } else output("No, try again");
  }

  // Question 5
  else if (number === 5) {
    if (mouseX > 120 && mouseX < 170 && mouseY > 85 && mouseY < 205) {
      output("Correct!");
      pic = loadImage("assets/space.jpg");
      question = "Which planet is known as the Red Planet?";
      number++;
    } else output("No, try again");
  }

  // Question 6
  else if (number === 6) {
    if (mouseX > 115 && mouseX < 150 && mouseY > 85 && mouseY < 125) {
      output("Correct! It's Mars 🔴");
      pic = loadImage("assets/animals.jpg");
      question = "Click on the lion";
      number++;
    } else output("No, try again");
  }

  // Question 7
  else if (number === 7) {
    if (mouseX > 370 && mouseX < 560 && mouseY > 90 && mouseY < 470) {
      output("Correct! 🦁 spotted");
      pic = loadImage("assets/countries.jpg");
      question = "Which country has the Eiffel Tower🗼?";
      number++;
    } else output("No, try again");
  }

  // Question 8 – Final
  else if (number === 8) {
    if (mouseX > 75 && mouseX < 160 && mouseY > 225 && mouseY < 310) {
      output("🎉🎉🎉 Congratulations! You completed Quiz!");
      noLoop();
    } else output("No, try again");
  }
}

function output(message) {
  alert(message);
}