//import modules
const youtubeDl = require("ytdl-core")

/*define (getVideoInfo) async function that takes one argument(the youtube video url),
 then assign the video info to the function*/

const getVideoInfo = async(videoUrl) => {
    return youtubeDl.getInfo(videoUrl) //get the video info
        .then(data => { return data }) //assign the video info to the function
}

//exports (getVideoInfo) function
module.exports = getVideoInfo