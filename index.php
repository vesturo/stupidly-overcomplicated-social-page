<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vesturo | Socials</title>
  <link rel="stylesheet" href="./style.css">
  <script src="https://kit.fontawesome.com/6bee25835f.js" crossorigin="anonymous"></script>
  <link rel="icon" href="./images/profile.jpg" type="image/x-icon" />
</head>

<body>
  <div id="loading-screen">
    <div id="loading-icon"></div>
  </div>
  <?php
  // Folder path where your images are stored
  $folderPath = 'images/backgrounds/';

  // Fetch all image files in the folder
  $imageFiles = glob($folderPath . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

  // Generate JavaScript code to set a random background
  echo '<script>';
  echo 'function getRandomIndex(array) {';
  echo '  return Math.floor(Math.random() * array.length);';
  echo '}';
  echo 'function setRandomBackground(images) {';
  echo '  var randomIndex = getRandomIndex(images);';
  echo '  var randomImage = images[randomIndex];';
  echo '  document.documentElement.style.backgroundImage = "url(\'" + randomImage + "\')";';
  echo '}';
  echo 'var imagePaths = ' . json_encode($imageFiles) . ';';
  echo 'setRandomBackground(imagePaths);';
  echo '</script>';
  ?>
  <button id="toggleButton" data-bs-toggle="tooltip" data-bs-placement="top" title="Toggle Container Visibility">
    <i class="fas fa-eye" id="showIcon" style="display:none;"></i>
    <i class="fas fa-eye-slash" id="hideIcon"></i>
  </button>
  <div class="container" style="display: block;">
    <img src="./images/profile.jpg" alt="Profile Picture">

    <h3 id="userName">Vesturo </h3>
    <p id="description"></p>

    <main>

    </main>
  </div>
  <script src="script.js"></script>
</body>

</html>