const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema= new Schema({
    startDate: {
        type: Date,
        required: [true, 'Start date field required']
    },
    endDate: {
        type: Date,
        required: [true, 'End date field required']
    },
    billingCycle: {
        type: String,
        required: [true, 'billing cycle is required']
    },
    vendorCode:  {
        type: Number,
        required: [true, 'vendor code is required']
    },
    address:  {
        type: String,
        required: [true, 'address is required']
    },
    city:  {
        type: String,
        required: [true, 'city is required']
    },
    pincode:  {
        type: Number,
        required: [true, 'pin code is required']
    },
    vendorGSTNo:  {
        type: String,
        required: [true, 'vendor gst number is required']
    },
    vendorPAN:  {
        type: String,
        required: [true, 'vendor PAN is required']
    },
    storageLocationName:  {
        type: String,
        required: [true, 'Storage location name is required']
    },
    slocCode:  {
        type: String,
        required: [true, 'SLOC code is required']
    },
    totalPeriod:  {
        type: String,
        required: [true, 'total period is required']
    },
});

const Agreement = mongoose.model('agreement', CSchema, 'agreement');

module.exports = Agreement;