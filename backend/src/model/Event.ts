import mongoose from "mongoose";


const event = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    invitation: {
        type: String
    },
    playlist: [{
        type: String
    }],
    status: {
        default: "Open",
        type: String
    }
})

const Event = mongoose.model('EVENT', event);

export default Event;