/*
    Code    : Sensor data visualization (Backend)
    Author  : Atick Faisal
    License : MIT
    Date    : 19.07.2019
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the scheme of the item to be saved in database
const itemSchema = new Schema({
    DEVICEID: {
        type: String,
        required: true
    },
    BPM: {
        type: Number,
        required: true
    },
    HF: {
        type: Number,
        required: true
    },
    LF: {
        type: Number,
        required: true
    },
    VLF: {
        type: Number,
        required: true
    },
    SCR: {
        type: Number,
        required: true
    },
    SCL: {
        type: Number,
        required: true
    },
    GSR: {
        type: Number,
        required: true
    },
    ZSCORE: {
        type: Number,
        required: true
    },     
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', itemSchema);