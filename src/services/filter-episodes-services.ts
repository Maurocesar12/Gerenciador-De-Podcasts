import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { filterPodcastModel } from "../models/filter-podcast-model";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<filterPodcastModel> => {

    //Define a interface de retorno 
    let responseFormat:filterPodcastModel = {
        statusCode: 0,
        body: [],
    };  

    //Buscando dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //verifico o conteudo

    responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NOCONTENT

    responseFormat.body = data;

    return responseFormat;
};



