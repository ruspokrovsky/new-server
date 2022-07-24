const express = require("express");
const projectRouter = express.Router();
const auth = require("../middlewares/auth");
const Project = require("../models/projects");

projectRouter.post("/api/add-project", auth, async (req, res) => {
    console.log(req.body.projectArray);
    let arr = req.body.projectArray;
    let project;
    try {

        for (var y in arr) {

            project = new Project({
                    'userId': arr[y]['userId'],
                    'userName': arr[y]['userName'],
                    'projSender': arr[y]['projSender'],
                    'projDate': arr[y]['projDate'],
                    'projBank': arr[y]['projBank'],
                    'projSum': arr[y]['projSum'],
                    'projCommission': arr[y]['projCommission'],
                    'projAmount': arr[y]['projAmount'],
                    'projUzsSum': arr[y]['projUzsSum'],
                    'convertCost': arr[y]['convertCost'],
                    'currencyValue': arr[y]['currencyValue'],
                    'projDebtRepayment': arr[y]['projDebtRepayment'],
                    'projBalance': arr[y]['projBalance']
                }
            );
            project = await project.save();
        }


        res.json(project);

    } catch (e) {
        console.log(e.message)
        res.status(500).json({error: e.message});
    }

});

// Get all projects
projectRouter.get("/get-all-projects", auth, async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json(projects);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});


projectRouter.post("/change-project-status", auth, async (req, res) => {
    try {
        const { projectId, projStatus, projUzsSum, convertCost } = req.body;
        console.log(projectId)
        let project = await Project.findById(projectId);
console.log(project)
        project.projStatus = projStatus;
        project.projUzsSum = projUzsSum;
        project.convertCost = convertCost;
        project = await project.save();

        res.json(project);

    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

// погашение суммы проекта
projectRouter.post("/add-repayment", auth, async (req, res) => {

    try {
        const { projectId, debtRepayment, projBalance } = req.body;

        console.log(projBalance);

        let project = await Project.findById(projectId);
        project.projDebtRepayment = debtRepayment;
        project.projBalance = projBalance;
        if (projBalance === "0.0" || projBalance === "0") {
            project.projStatus = 2;
        }


        project = await project.save();
        res.json(project);

    } catch (e) {
        res.status(500).json({error: e.message});
    }
});


module.exports = projectRouter;