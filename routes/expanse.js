const express = require("express");
const expenseRouter = express.Router();
const auth = require("../middlewares/auth");
const Expense = require("../models/expense");


expenseRouter.post("/create-expense", auth, async (req, res) => {
    let expense;
    try {
        expense = new Expense({
            'userId': req.body['userId'],
            'expenseSum': req.body['expenseSum'],
            'companyName': req.body['companyName'],
            'agentName': req.body['agentName'],
            'reportSum': req.body['reportSum'],
            'currency': req.body['currency'],
            'freeCurrencyCost': req.body['freeCurrencyCost'],
            'paymentOrder': req.body['paymentOrder'],
            'bankCommission': req.body['bankCommission'],
            'description': req.body['description'],
            'images': req.body['images'],
            'reportDate': req.body['reportDate'],
            'invoice': req.body['invoice'],
            'status': req.body['status'],
        });

        console.log(expense);

        expense = await expense.save();
        res.json(expense);
    } catch (e) {
        console.log(e.message)
        res.status(500).json({error: e.message});
    }

});

expenseRouter.post("/update-expense", auth, async (req, res) => {
    const { id,
        companyName, agentName, bankName, currency,
        reportSum, freeCurrencyCost, paymentOrder,
        bankCommission, description, images, reportDate,status} = req.body;

    let expense = await Expense.findById(id);

    try {
        expense.companyName = companyName;
        expense.agentName = agentName;
        expense.agentName = agentName;
        expense.bankName = bankName;
        expense.currency = currency;
        expense.reportSum = reportSum;
        expense.freeCurrency = freeCurrencyCost;
        expense.paymentOrder = paymentOrder;
        expense.bankCommission = bankCommission;
        expense.description = description;
        expense.reportDate = reportDate;
        expense.images = images;
        expense.status = status;

        expense = await expense.save();
        res.json(expense);

    } catch (e) {
        console.log(e.message)
        res.status(500).json({error: e.message});
    }

});






expenseRouter.get("/get-all-expense", auth, async (req, res) => {
    try {
        const expense = await Expense.find();
        res.json(expense);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

expenseRouter.get("/get-all-invoice", auth, async (req, res) => {
    try {
        const expense = await Expense.find({},{invoice : true});
        res.json(expense);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});
module.exports = expenseRouter;