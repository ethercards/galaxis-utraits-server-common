"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviromentController = void 0;
const process_1 = require("process");
class EnviromentController {
    /**
     * Get the client related enviroment variables
     * @param request
     * @param response
     * @param next
     */
    getEnviroment(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const defFilter = ['ENV', 'COMMUNITY_ID', 'APP', 'CHAIN_ID', 'APP_TRAIT_TYPE', 'RPC_URL', 'WSS_RPC_URL'];
            const getFiltered = (filter = defFilter) => {
                const filtered = Object.entries(process_1.env).filter(([key, value]) => filter.indexOf(key) > -1);
                return Object.fromEntries(filtered);
            };
            response.send(getFiltered());
        });
    }
}
exports.EnviromentController = EnviromentController;
