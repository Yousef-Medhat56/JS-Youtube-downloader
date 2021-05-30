//show the video details for the user after fetching it

//DOM elements
const videoUrlForm = document.getElementById("video-url-form") //form tag
const frontSide = document.getElementById("front-side") //the front side that contain the input field and submit button
const backSide = document.getElementById("back-side") //The back side that will contain the video details

/*video duration value in the API is in seconds only,
so this function convert video duration into seconds, minutes and hours */
const showVidDuration = (videoDuration) => {
    const minutes = Math.floor(videoDuration / 60) //video duration > minutes
    const seconds = videoDuration - (minutes * 60) //video duration > seconds

    const writeZero = (duration) => {
        if (duration > 9) return duration //check if the duration value is bigger than 9
            //if the duration value is less than 9
        return `0${duration}` //write 0 before the duration
    }

    //if the video is less than one minute
    if (minutes === 0) return `00:${writeZero(videoDuration)}`

    //if the video is less than one hour
    else if (minutes > 0 && minutes < 60) return `${writeZero(minutes)}:${writeZero(seconds)}`

    //if the video is bigger than one hour
    else if (minutes > 59) {
        const hours = Math.floor(minutes / 60)
        const minutes2 = minutes - (hours * 60) //amount of minutes after sunbstracting hours from it
        return `${writeZero(hours)}:${writeZero(minutes2)}:${writeZero(seconds)}`
    }
}


//rotate front and back sides after clicking submit button
const rotateSides = () => {
    frontSide.style.transform = "perspective(2000px) rotateY(180deg)" //rotate front side
    backSide.style.transform = "perspective(2000px) rotateY(0deg)" //rotate back side
    frontSide.style.visibility = "hidden" //hide front side

}

//add new styles to the back side (video details container) after its rotation
const modifyBackSide = (videoInfo) => {
    setTimeout(() => { //wait until the backside rotate, then invoke the function
            backSide.style.height = "150px" //increase back side height
            backSide.style.marginBottom = "-100px" // add margin bottom
            videoUrlForm.style.margin = "22vh 0 10vh" //decrease the form margin 
            showVideoInfo(videoInfo) //show video details in the back side

        }, 900) //0.9s = transition duration of the backside
}

//write the video details 
const showVideoInfo = (videoInfo) => {
    setTimeout(() => {
            /*wait the backside styles in (modifyBackSide) function, 
                   then invoke the function (write the video details in the back side)*/

            //destructing the videoInfo Object
            const { videoDetails: { thumbnails: [img], title, ownerChannelName, lengthSeconds, viewCount, uploadDate } } = videoInfo

            //write video info in the (back side) div
            backSide.innerHTML = `<div id = "thumbnail-container"> <img src="${img.url}" alt="video thumbnail"></div>
    <div id= "video-info">
    <h3 id= "video-title">${title}</h3>
    <h4 id = "channel-name">${ownerChannelName}</h4>
    <h4 id= "video-duration">${showVidDuration(parseInt(lengthSeconds))}</h4>
    <div>
    <h4 id= "video-views">${viewCount} views . ${uploadDate}</h4>
    
    </div>
    </div>`


            //increase height of the main formats container
            formatsContainer.style.height = "160vh"

            //show available formats for downloading
            showAvailableFormats(vidAndAud, 0) //formats that have video and audio together
            showAvailableFormats(vidOnly, 1) //formats that have video only
            showAvailableFormats(audOnly, 2, addAudFormat) //formats that have audio only

        }, 900) //0.9s = transition duration of the backside
}