"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatientRecord = exports.updatePatientRecord = exports.getSinglePatientRecord = exports.getPatientRecord = exports.PatientRecord = void 0;
const uuid_1 = require("uuid");
const hospitalReportModel_1 = require("../model/hospitalReportModel");
const utils_1 = require("../utils/utils");
async function PatientRecord(req, res, next) {
    // create a todo
    const id = (0, uuid_1.v4)();
    let patient = { ...req.body, patientId: id };
    try {
        const validateResult = utils_1.createPatientSchema.validate(req.body, utils_1.options);
        if (validateResult.error) {
            return res
                .status(400)
                .json({ Error: validateResult.error.details[0].message });
        }
        const record = await hospitalReportModel_1.patientInstance.create(patient);
        res
            .status(201)
            .json({ msg: "You have successfully created a patient report", record });
    }
    catch (err) {
        res.status(500).json({
            msg: "Failed to create patient report",
            route: "/create",
        });
    }
}
exports.PatientRecord = PatientRecord;
// GET all Todo list
async function getPatientRecord(req, res, next) {
    try {
        const limit = req.query?.limit;
        const offset = req.query?.offset;
        // const record = await TodoInstance.findAll({ where: {}, limit });
        const record = await hospitalReportModel_1.patientInstance.findAndCountAll({ limit, offset });
        res.status(200).json({
            msg: "You have successfully fetch all patient report",
            count: record.count,
            record: record.rows,
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Failed to fetch all patient report",
            route: "/read",
        });
    }
}
exports.getPatientRecord = getPatientRecord;
// GET Single Todo
async function getSinglePatientRecord(req, res, next) {
    try {
        // const id = req.params.patientId;
        // OR
        const { patientId } = req.params;
        const record = await hospitalReportModel_1.patientInstance.findOne({ where: { patientId } });
        res
            .status(200)
            .json({ msg: "You have successfully find your patient report", record });
    }
    catch (err) {
        res.status(500).json({
            msg: "Failed to read single patient report",
            route: "/read/:id",
        });
    }
}
exports.getSinglePatientRecord = getSinglePatientRecord;
/* UPDATE Todos listing. */
async function updatePatientRecord(req, res, next) {
    // create a todo
    const id = (0, uuid_1.v4)();
    try {
        const { patientId } = req.params;
        const { patientName, age, hospitalName, weight, height, bloodGroup, genotype, bloodPressure, HIV_status, hepatitis, } = req.body;
        const validateResult = utils_1.updatePatientSchema.validate(req.body, utils_1.options);
        if (validateResult.error) {
            return res
                .status(400)
                .json({ Error: validateResult.error.details[0].message });
        }
        const record = await hospitalReportModel_1.patientInstance.findOne({ where: { patientId } });
        if (!record) {
            return res.status(404).json({
                Error: "Cannot find existing patient report",
            });
        }
        const updatedRecord = await record.update({
            patientName: patientName,
            age: age,
            hospitalName: hospitalName,
            weight: weight,
            height: height,
            bloodGroup: bloodGroup,
            genotype: genotype,
            bloodPressure: bloodPressure,
            HIV_status: HIV_status,
            hepatitis: hepatitis,
        });
        res.status(202).json({
            msg: "You have successfully updated your patient report",
            record: updatedRecord,
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Failed to update patient report",
            route: "/update/:id",
        });
    }
}
exports.updatePatientRecord = updatePatientRecord;
// DELETE Todo
async function deletePatientRecord(req, res, next) {
    try {
        //  const id = req.params.id    OR
        const { patientId } = req.params;
        const record = await hospitalReportModel_1.patientInstance.findOne({ where: { patientId } });
        if (!record) {
            return res.status(404).json({ msg: "Can not find patient report" });
        }
        const deletedRecord = await record.destroy();
        return res
            .status(200)
            .json({ msg: "Successfully deleted patient report", deletedRecord });
    }
    catch (err) {
        res.status(500).json({
            msg: "Failed to delete patient report",
            route: "/delete/:id",
        });
    }
}
exports.deletePatientRecord = deletePatientRecord;
