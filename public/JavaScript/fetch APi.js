//Get DOM elements
const videoUrlForm = document.getElementById("video-url-form") //form tag
const videoUrlInput = document.getElementById("video-url-input") //input video link field
const videoUrlBtn = document.getElementById("video-url-btn") //submit button

//add click event to the submit button
videoUrlBtn.onclick = (e) => {
    e.preventDefault()

    //fetch video data
    fetch(`http://localhost:7777/getData/?videoUrl=${videoUrlInput.value}`)
        .then(response => response.json())
        .then(data => console.log(data))
}