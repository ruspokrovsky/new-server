const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({

    expenseId: {type: String, required: false,},
    userId: {type: String, required: true,},
    expenseSum: {type: String, required: true,},
    companyName: {type: String, required: true,},
    agentName: {type: String, required: true,},
    bankName: {type: String, required: false,},
    currency: {type: String, required: false,},
    reportSum: {type: String, required: true,},
    freeCurrencyCost: {type: String, required: true,},
    paymentOrder: {type: String, required: true,},
    bankCommission: {type: String, required: true,},
    description: {type: String, required: true,},
    images: [
        {
            type: String,
            required: true,
        },
    ],
    reportDate: {type: Number, required: true,},
    invoice: {type: Number, required: true,},
    status: {type: Number, required: true,},

});

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;