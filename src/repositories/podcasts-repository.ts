import fs from "fs";
import path from "path";
import { podcast } from "../models/podcastModel";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<podcast[]> => {
    const rawdata = fs.readFileSync(pathData, "utf-8")
    const jsonFile = JSON.parse(rawdata);
    return jsonFile;
};