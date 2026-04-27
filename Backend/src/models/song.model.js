const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    
     url : {
        type: String,
        required: true
    },
    posturl : {    
        type: String,
        required: true
    },
  
    title: {
        type: String,
        required: true
    }

})

const SongModel = mongoose.model('Song', songSchema);

module.exports = SongModel;
   
    