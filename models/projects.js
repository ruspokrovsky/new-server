const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({

    userId: {type: String, required: true,},

    userName: {type: String, required: true,},

    projSender: {type: String, required: true,},

    projDate: {type: Number, required: true,},

    projBank: {type: String, required: true,},

    projSum: {type: String, required: true,},

    projCommission: {type: String, required: true,},

    projAmount: {type: String, required: true,},

    projUzsSum: {type: String, required: true,},

    convertCost: {type: String, required: true,},

    currencyValue: {type: String, required: true,},

    projDebtRepayment: {type: String, required: true,},

    projBalance: {type: String, required: true,},

    projStatus: {type: Number, default: 0,},

});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;