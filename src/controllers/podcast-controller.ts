import { IncomingMessage,ServerResponse } from "http";

import {serviceListEpisodes} from "../services/list-episodes-services"

export const getListEpisodes = async (
    req : IncomingMessage,
    res: ServerResponse
) => {
    const content = await serviceListEpisodes();

    res.writeHead(200,{'content-type': 'application/json'});
    res.end(
        JSON.stringify(content)
   );
};

