const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema= new Schema({
    salesApplicable: {
        type: String,
        required: [true, 'Sales Applicable field required']
    },
    SlabRangeFrom:  {
        type: Number,
        required: [true, 'Slab Range From field required']
    },
    slabRangeTo:  {
        type: Number,
        required: [true, 'Slab Range To field required']
    },
    reducedCommission: {
        type: String,
        required: [true, 'Reduced Commission field required']
    },
    commission: {
        type: Number,
        required: [true, 'Commission field required']
    },
  
});

const DoD = mongoose.model('dod', CSchema, 'dod');

module.exports = DoD;