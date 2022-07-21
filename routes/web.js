import express from "express";
import StudentController from "../controllers/studentController.js";

const router = express.Router();

router.get('/', StudentController.getAllDoc);
router.post('/create',StudentController.createDoc);
router.get('/get/:id',StudentController.getSingleDocById);
router.put('/update/:id',StudentController.updateDocById);
router.delete('/delete/:id',StudentController.deleteDocById);


export default router;