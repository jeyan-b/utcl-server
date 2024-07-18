const express = require('express');
const router = express.Router();
const Agency = require('../model/agency');
const Agreement = require('../model/agreement');
const CCNF = require('../model/ccnf');
const DoD = require('../model/dod');
const Gkr = require('../model/gkr');

router.get('/agency', async function(req, res, next){
    try {
        const agency = await Agency.find({});
        res.send(agency);
        console.log(agency);
      } catch (err) {
        console.log(err);
      }
});

router.post('/agency', async function(req, res, next){
var newAgency = new Agency({
    vendor: req.body.vendor,
    agencyName: req.body.agencyName,
    state: req.body.state,
    region:req.body.region,
    depot:req.body.depot,
    district: req.body.district,
});
try {
    const agency = await newAgency.save();
    res.send(agency);
    console.log(agency);
  } catch (err) {
    console.log(err);
  }

});

router.post('/agreement', async function(req, res, next){
var newAgreement = new Agreement({
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    billingCycle: req.body.billingCycle,
    vendorCode: req.body.vendorCode,
    address: req.body.address,
    city: req.body.city,
    pincode: req.body.pincode,
    vendorGSTNo: req.body.vendorGSTNo,
    vendorPAN: req.body.vendorPAN,
    storageLocationName: req.body.storageLocationName,
    slocCode: req.body.slocCode,
    totalPeriod: req.body.totalPeriod
});
try {
    const agreement = await newAgreement.save();
    res.send(agreement);
    console.log(agreement);
  } catch (err) {
    console.log(err);
  }

});

router.post('/ccnfCommision', async function(req, res, next){
var newCcnfConfirmation = new CCNF({
  commisionRangeFrom: req.body.commisionRangeFrom,
  commisionRangeTo: req.body.commisionRangeTo,
  metroCityCommission: req.body.metroCityCommission,
  commissionValue: req.body.commissionValue,
  applyMinimumCommission:req.body.applyMinimumCommission,
  minimumCommissionSlab: req.body.minimumCommissionSlab,
  guBtHandledByCCnF: req.body.guBtHandledByCCnF,
  guBtPlantCodeName: req.body.guBtPlantCodeName,
  plant1Code: req.body.plant1Code,
  plant2Code: req.body.plant2Code,
  plant3Code: req.body.plant3Code,
  plant4Code: req.body.plant4Code,
  guBtPlantStandardCommission: req.body.guBtPlantStandardCommission,
  interCompanySaleApplicable: req.body.interCompanySaleApplicable,
  Commission: req.body.Commission,
  interUnitSalesApplicable: req.body.interUnitSalesApplicable,
  interUnitSalesCommission: req.body.interUnitSalesCommission,
  otherDepoCommissionDeductionApplicable: req.body.otherDepoCommissionDeductionApplicable,
  salestoOtherDepoCommission: req.body.salestoOtherDepoCommission,
  SalesFromOtherDepoCommission:req.body.SalesFromOtherDepoCommission,
});
try {
    const agreement = await newCcnfConfirmation.save();
    res.send(agreement);
    console.log(agreement);
  } catch (err) {
    console.log(err);
  }

});

router.post('/dodSales', async function(req, res, next){
  var doDSales = new DoD({
    salesApplicable: req.body.salesApplicable,
    SlabRangeFrom: req.body.SlabRangeFrom,
    slabRangeTo: req.body.slabRangeTo,
    reducedCommission: req.body.reducedCommission,
    commission: req.body.commission
  });
  try {
      const agency = await doDSales.save();
      res.send(agency);
      console.log(agency);
    } catch (err) {
      console.log(err);
    }
  
  });

router.post('/gkr', async function(req, res, next){
  var gkr = new Gkr({
    fixedRent: req.body.fixedRent,
    greaterThree: req.body.greaterThree,
    lesserThree: req.body.lesserThree
  });
  try {
      const agency = await gkr.save();
      res.send(agency);
      console.log(agency);
    } catch (err) {
      console.log(err);
    }
  
  });

module.exports = router;