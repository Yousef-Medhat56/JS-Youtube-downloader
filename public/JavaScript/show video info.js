//show the video details for the user after fetching it

//DOM elements
const videoUrlForm = document.getElementById("video-url-form") //form tag
const frontSide = document.getElementById("front-side") //the front side that contain the input field and submit button
const backSide = document.getElementById("back-side") //The back side that will contain the video details

//rotate front and back sides after clicking submit button
const rotateSides = () => {
    frontSide.style.transform = "perspective(2000px) rotateY(180deg)" //rotate front side
    backSide.style.transform = "perspective(2000px) rotateY(0deg)" //rotate back side
    frontSide.style.visibility = "hidden" //hide front side

}

//add new styles to the back side (video details container) after its rotation
const modifyBackSide = (videoInfo) => {
    backSide.addEventListener("transitionend", () => {
        backSide.style.height = "150px" //increase back side height
        backSide.style.marginBottom = "-100px" // add margin bottom
        videoUrlForm.style.margin = "12vh 0" //decrease the form margin 
        showVideoInfo(videoInfo) //show video details in the back side
    })
}

//write the video details 
const showVideoInfo = (videoInfo) => {
    backSide.addEventListener("transitionend", () => {
        //destructing the videoInfo Object
        const { videoDetails: { thumbnails: [img], title, ownerChannelName, lengthSeconds, viewCount, uploadDate } } = videoInfo

        //write video info in the (back side) div
        backSide.innerHTML = `<div id = "thumbnail-container"> <img src="${img.url}" alt="video thumbnail"></div>
    <div id= "video-info">
    <h3 id= "video-title">${title}</h3>
    <h4 id = "channel-name">${ownerChannelName}</h4>
    <div id= "video-duration">${lengthSeconds}</div>
    <div>
    <h4 id= "video-views">${viewCount} views . ${uploadDate}</h4>
    
    </div>
    </div>`
    })
}