const mongoose = require("mongoose");

//Chat will have : (_id, from, to, message, created_at)
const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: Date,
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;  // to send the chat to main index page