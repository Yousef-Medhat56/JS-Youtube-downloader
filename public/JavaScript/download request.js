//send request to the server to download the video
const sendDownloadReq = (quality, title, type) => {

    window.open((`http://localhost:7777/downloadVid/?videoQuality=${quality}&videoTitle=${encodeURIComponent(title)}&videoType=${type}`))
}