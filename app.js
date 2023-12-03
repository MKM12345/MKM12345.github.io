// Get the container element
let navContainer = document.getElementById("navigation");

// Get all buttons with class="btn" inside the container
let btns = navContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active glow");
    current[0].className = current[0].className.replace(" active glow", "");
    this.className += " active glow";
  });
}
// Add typing effect
const words = ['A Web developer', 'A game coder', 'Grammar school kid', 'An app maker'];
        let wordIndex = 0;
        const wordElement = document.querySelector('.mb-3.text-info');

        function typeWord() {
            const word = words[wordIndex];
            wordElement.textContent = '';
            let letterIndex = 0;

            const typingInterval = setInterval(function() {
                if (letterIndex >= word.length) {
                    clearInterval(typingInterval);
                    setTimeout(deleteWord, 1000);
                } else {
                    wordElement.textContent += word[letterIndex];
                    letterIndex++;
                }
            }, 100);
        }

        function deleteWord() {
            let letterIndex = wordElement.textContent.length;

            const deletingInterval = setInterval(function() {
                if (letterIndex <= 0) {
                    clearInterval(deletingInterval);
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(typeWord, 500);
                } else {
                    wordElement.textContent = wordElement.textContent.slice(0, -1);
                    letterIndex--;
                }
            }, 100);
        }

        typeWord();
// Send Email
function handleFormSubmission() {
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var message = document.forms["contact"]["message"].value;

    var lineBreak = "%0A";

    var subject = "Message from: " + encodeURIComponent(name);

    var body = encodeURIComponent(message);

    var mailtoLink = "mailto:arekhon.shadow@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;

    window.location.href = mailtoLink;

    return false;
}


