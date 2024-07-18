const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema= new Schema({
    vendor: {
        type: String,
        required: [true, 'vendor field required']
    },
    agencyName: {
        type: String,
        required: [true, 'agency name required']
    },
    state: {
        type: String,
        required: [true, 'state is required']
    },
    region: {
        type: String,
        required: [true, 'region is required']
    },
    depot: {
        type: String,
        required: [true, 'depot is required']
    },
    district: {
        type: String,
        required: [true, 'district is required']
    }
});

const Agency = mongoose.model('agency', CSchema, 'agency');

module.exports = Agency;