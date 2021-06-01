//Import modules
const express = require("express")
const app = express()

const fs = require("fs")
const path = require("path")

const contentDisposition = require('content-disposition')


//import getVideoInfo function
const getVideoInfo = require("./Server/get video info")

//import downloadVid function
const downloadVid = require("./Server/download video")

//add port 
const PORT = process.env.PORT || 7777
app.listen(PORT)

/*app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "HTML", "index.html"))
})*/
app.use(express.static('public'))
    //hadle get request : get the video info

app.get("/getData", (req, res) => {
    videoUrl = req.query.videoUrl //destructing (req.query) object
    getVideoInfo(videoUrl).then(data => res.send(data)) //get the video info by its URL then send it to the frontend
})

//hadle get request : download video
app.get("/downloadVid", (req, res) => {
    const { videoQuality, videoTitle, videoType } = req.query //destructing (req.query) object

    //set header
    res.setHeader('Content-Disposition', contentDisposition(`${videoTitle}.${videoType}`))
    downloadVid(videoUrl, videoQuality, res) //download the video


})