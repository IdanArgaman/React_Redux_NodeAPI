import { Router } from "express";

import setEmployeesV1 from "./employeesV1";

const router = Router();

setEmployeesV1(router);

export const routerV1 = {
    baseUrl: "/api/v1",
    router
};