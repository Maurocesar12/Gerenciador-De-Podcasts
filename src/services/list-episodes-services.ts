import { filterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<filterPodcastModel> =>{
      let responseFormat:filterPodcastModel = {
              statusCode: 0,
              body: [],
      };

   const data = await repositoryPodcast();

      

   responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NOCONTENT;
   responseFormat.body = data;

return responseFormat;
};