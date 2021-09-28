var ObjectID = require("bson-objectid");
import { errorHandler } from "../utils";
import { Employee } from "../models";

export const getEmployees = async (req, res) => {
    const employees = await new Employee().getEmployees();
    res.json(employees);
};

export const updateEmployee = async (req, res) => {
    const employeeId = req.params.id;
    const employee = req.body;

    employee || next(errorHandler("Please submit valid employee", 400));
    employeeId || next(errorHandler("Please submit valid employee", 400));

    try {
        await new Employee().updateEmployee(employee);
        res.json({
            message: "Employee updated"
        });
    } catch(e) {
        next(errorHandler("No data updated " + e.data));
    }
};
