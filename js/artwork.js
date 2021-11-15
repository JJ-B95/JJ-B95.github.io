var artworks = [
    "Veil_I.jpg",
    "Veil_III.jpg",
    "String_I.jpg",
    "Mid_Summer_Night_Dream_PM.jpg",
    "Flow_of_History.jpg",
    "Curious.jpg",
    "fear.jpg",
    "Love.jpg",
    "sinian.jpg",
  ],
  imgs = "";

for (i = 0; i < artworks.length; i++) {
  positionx = Math.random() * (window.innerHeight * 0.95);
  positiony = Math.random() * (window.innerWidth * 0.95);
  positionz = i;

  imgs +=
    '<img src="media/artworks/' +
    artworks[i] +
    '" style = "top:' +
    positionx +
    "px; right:" +
    positiony +
    "px; z-index:" +
    positionz +
    ';">';
}

document.getElementById("artworkblock").innerHTML = imgs;
