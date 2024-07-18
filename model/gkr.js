const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema= new Schema({
    fixedRent: {
        type: String,
        required: [true, 'Fixed Rent field required']
    },
    greaterThree:  {
        type: Number,
        required: [true, 'Greater Three field required']
    },
    lesserThree:  {
        type: Number,
        required: [true, 'Lesser Three field required']
    }
});

const Gkr = mongoose.model('gkr', CSchema, 'gkr');

module.exports = Gkr;