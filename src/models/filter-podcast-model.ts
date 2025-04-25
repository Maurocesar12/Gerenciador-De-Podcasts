import { podcastModel } from "./podcastModel";

export interface filterPodcastModel {
    statusCode: number,
    body:podcastModel[];
}