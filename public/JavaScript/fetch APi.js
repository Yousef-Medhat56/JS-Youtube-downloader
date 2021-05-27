//Get DOM elements

const videoUrlInput = document.getElementById("video-url-input") //input video link field
const videoUrlBtn = document.getElementById("video-url-btn") //submit button

//define the function that will be invoked after clicking the submit button
const clickSubmitBtn = e => {
    e.preventDefault()

    //check if the input field is empty
    if (!videoUrlInput.value) {
        showErrorMsg("Please enter video url") //ask the user to enter a video url
    }
    //if the input field isn't empty
    else {
        //fetch video data
        fetch(`http://localhost:7777/getData/?videoUrl=${videoUrlInput.value}`)
            .then(response => response.json())
            .then(data => {
                rotateSides() //rotate back side to contain the video details
                modifyBackSide(data) //modify the back side styles and write video details in it
                console.log(data)
            })
            .catch(err => { //if there is an error
                showErrorMsg("Please enter valid video url") //ask the user to enter the url again
                ctrlLoaderDis("block", "none") //hide loader and show submit button again
            })


        //show loader and hide submit button to prevent the user from clicking on the button again during fecthing the video info
        ctrlLoaderDis("none", "flex")
    }
}

//add click event to the submit button
videoUrlBtn.addEventListener("click", clickSubmitBtn)