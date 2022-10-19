"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviromentRoutes = void 0;
const EnviromentController_1 = require("../controller/EnviromentController");
exports.enviromentRoutes = [{
        method: "get",
        route: `get_env`,
        controller: EnviromentController_1.EnviromentController,
        action: "getEnviroment"
    }];
