import { IncomingMessage,ServerResponse } from "http";

import {serviceListEpisodes} from "../services/list-episodes-services"
import {serviceFilterEpisodes} from "../services/filter-episodes-services";
import { statusCode } from "../utils/status-code";
import { contentType } from "../utils/content-type";
import { filterPodcastModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (
    req : IncomingMessage,
    res: ServerResponse
) => {
    const content = await serviceListEpisodes();

    res.writeHead(statusCode.OK,{'content-type': contentType.JSON});
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    //http://localhost:3333/api/episode?p=flow
    
    const content:filterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {"content-type": "application/json"});
    res.end(JSON.stringify(content.body));
};

