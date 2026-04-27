const SongModel = require('../models/song.model');
const id3 = require('node-id3');


async function uploadSong(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const tags = id3.read(req.file.buffer);
    console.log(tags);

    return res.status(200).json({
      message: "Song uploaded successfully",
      tags
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}



module.exports = {
    uploadSong
}
