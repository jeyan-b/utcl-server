const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema= new Schema({
    commisionRangeFrom: {
        type: Number,
        required: [true, 'Commision range from field required']
    },
    commisionRangeTo: {
        type: Number,
        required: [true, 'Commision range to field required']
    },
    commissionValue: {
        type: Number,
        required: [true, 'Commision Value field required']
    },
    applyMinimumCommission: {
        type: String,
        required: [true, 'apply Minimum Commission field required']
    },
    minimumCommissionSlab: {
        type: Number,
        required: [true, 'minimum Commission Slab field required']
    },
    guBtHandledByCCnF: {
        type: String,
        required: [true, 'guBt Handled By CCnF field required']
    },
    guBtPlantCodeName: {
        type: Array,
        required: [true, 'guBt Plant Code Name field required']
    },
    plant1Code: {
        type: String,
        required: [true, 'plant 1 Code field required']
    },
    plant2Code: {
        type: String,
        required: [true, 'plant 2 Code field required']
    },
    plant3Code: {
        type: String,
        required: [true, 'plant 3 Code field required']
    },
    plant4Code: {
        type: String,
        required: [true, 'plant 4 Code field required']
    },
    guBtPlantStandardCommission: {
        type: Number,
        required: [true, 'guBt Plant Standard Commission field required']
    },
    interCompanySaleApplicable: {
        type: String,
        required: [true, 'inter Company Sale Applicable field required']
    },
    Commission: {
        type: Number,
        required: [true, 'Commision field required']
    },
    interUnitSalesApplicable: {
        type: String,
        required: [true, 'inter Unit Sales Applicable field required']
    },
    interUnitSalesCommission: {
        type: Number,
        required: [true, 'inter Unit Sales Commission field required']
    },
    otherDepoCommissionDeductionApplicable: {
        type: String,
        required: [true, 'other Depo Commission Deduction Applicable field required']
    },
    salestoOtherDepoCommission: {
        type: Number,
        required: [true, 'sales to Other Depo Commission field required']
    },
    SalesFromOtherDepoCommission: {
        type: Number,
        required: [true, 'Sales From Other Depo Commission field required']
    },
});

const CCNF = mongoose.model('ccnf', CSchema, 'ccnf');

module.exports = CCNF;