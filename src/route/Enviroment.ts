import { EnviromentController } from "../controller/EnviromentController";

export const enviromentRoutes = [{
    method: "get",
    route: `get_env`,
    controller: EnviromentController,
    action: "getEnviroment"
}]