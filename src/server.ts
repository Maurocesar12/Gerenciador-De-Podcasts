import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from  './controllers/podcast-controller';


const server = http.createServer(
   async(req: http.IncomingMessage, res: http.ServerResponse)=> {
         //Listar Podcasts
        if(req.method === "GET" && req.url === "/api/list") {
            await getListEpisodes(req, res);
        }

        if(req.method === "GET" && req.url === "/api/episode"){
            await getFilterEpisodes(req,res);
        }
    }
);

const port = process.env.PORT;

server.listen(port, ()=> {
    console.log(`Servidor iniciado na porta ${port}`)
});