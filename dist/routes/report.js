"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reportController_1 = require("../controller/reportController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
/* GET Todos. */
router.post("/create", auth_1.auth, reportController_1.PatientRecord);
router.get("/read", reportController_1.getPatientRecord);
router.get("/read/:doctor", auth_1.auth, reportController_1.getSinglePatientRecord);
router.patch("/update/:doctor", auth_1.auth, reportController_1.updatePatientRecord);
router.delete("/delete/:doctor", auth_1.auth, reportController_1.deletePatientRecord);
exports.default = router;
