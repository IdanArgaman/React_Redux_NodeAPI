import { employeesV1 as v1 } from "../../controllers";
import { AsyncWrapper } from "../../utils";

export default router => {
    // GET /api/v1/employees
    router.get("/employees", AsyncWrapper(v1.getEmployees));
    router.put("/employees/:id", AsyncWrapper(v1.updateEmployee));
};