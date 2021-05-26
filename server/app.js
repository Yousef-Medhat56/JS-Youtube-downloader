//Import modules
const youtubeDl = require("ytdl-core")
const express = require("express")
const app = express()

//import getVideoInfo function
const getVideoInfo = require("./get video info")

//add port 
const PORT = process.env.PORT || 7777
app.listen(PORT)

//hadle get request : get the video info
app.get("/getData", (req, res) => {
    const { videoUrl } = req.query //destructing (req.query) object
    getVideoInfo(videoUrl).then(data => res.send(data)) //get the video info by its URL then send it to the frontend
})