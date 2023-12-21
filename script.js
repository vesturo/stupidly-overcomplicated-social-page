// your-script.js

// Function to fetch and display data from JSON
function fetchData() {
    // Replace 'data.json' with the path to your JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Calculate age based on date of birth
            const dobParts = data.dob.split('/');
            const dobDate = new Date(`${dobParts[1]}/${dobParts[0]}/${dobParts[2]}`);
            const today = new Date();
            const age = today.getFullYear() - dobDate.getFullYear();
            data.age = (today.getMonth() < dobDate.getMonth() || (today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())) ? age - 1 : age;

            // Update the description element
            document.getElementById('description').textContent = `${data.age} | ${data.gender} | ${data.info}`;

            const mainElement = document.querySelector('main');
            data.links.forEach(link => {
                const aElement = document.createElement('a');
                aElement.href = link.url;
                aElement.target = '_blank';

                const iElement = document.createElement('i');
                iElement.className = link.icon;
                aElement.style.setProperty('color', link.hoverColor || '#ddd');

                const spanElement = document.createElement('span');
                spanElement.textContent = link.text;

                aElement.style.setProperty('--hoverColor', link.hoverColor || '#ddd');
                aElement.style.setProperty('--hoverTextColor', link.hoverTextColor || '#ddd');
                if (link.disabled) {
                    aElement.classList.add("disabled");
                }

                const imageNames = data.imageNames;

                // Construct image paths and set a random background when the page loads



                // Append icon and text to the link
                aElement.appendChild(iElement);
                aElement.appendChild(spanElement);

                // Append link to the main element
                mainElement.appendChild(aElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.addEventListener("DOMContentLoaded", function () {
    fetchData();
    // Hide the loading screen when the page is fully loaded
    window.addEventListener("load", function () {
        document.getElementById("loading-screen").classList.add("hide");
    });
    const toggleButton = document.getElementById('toggleButton');
    const container = document.querySelector('.container');
    const showIcon = document.getElementById('showIcon');
    const hideIcon = document.getElementById('hideIcon');

    toggleButton.addEventListener('click', function () {
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block';
            showIcon.style.display = 'none';
            hideIcon.style.display = 'inline';
        } else {
            container.style.display = 'none';
            showIcon.style.display = 'inline';
            hideIcon.style.display = 'none';
        }
    });
});

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Function to set a random background image
function setRandomBackground(images) {
    // Get a random image from the array
    const randomIndex = getRandomIndex(images);
    const randomImage = images[randomIndex];

    // Set the background image of the body
    document.documentElement.style.backgroundImage = `url('images/backgrounds/${randomImage}')`;

    var imagePaths = json_encode($imageFiles);
    console.log(imagePaths);
    setRandomBackground(imagePaths);
}