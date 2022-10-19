import { NextFunction, Request, Response } from "express"
import { env } from "process";

export class EnviromentController {

    /**
     * Get the client related enviroment variables
     * @param request 
     * @param response 
     * @param next 
     */
    async getEnviroment(request: Request, response: Response, next: NextFunction) {

        const defFilter = ['ENV', 'COMMUNITY_ID', 'APP', 'CHAIN_ID', 'APP_TRAIT_TYPE', 'RPC_URL', 'WSS_RPC_URL'];

        const getFiltered = (filter = defFilter) => {
            const filtered = Object.entries(env).filter(([key, value]) => filter.indexOf(key) > -1);

            return Object.fromEntries(filtered);
        }

        response.send(getFiltered());
    }
}