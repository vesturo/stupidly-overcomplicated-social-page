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
                if(link.disabled) {
                    aElement.classList.add("disabled");
                }

                // Append icon and text to the link
                aElement.appendChild(iElement);
                aElement.appendChild(spanElement);
            
                // Append link to the main element
                mainElement.appendChild(aElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the fetchData function when the page is loaded
document.addEventListener('DOMContentLoaded', fetchData);
