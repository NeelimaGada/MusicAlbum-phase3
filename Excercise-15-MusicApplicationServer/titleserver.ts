import * as express from 'express';
import * as bodyParser from 'body-parser';
import titles from './titles';
class TitleServer{
    getConnection():any{
        console.log('title page');
        const app = express();
       
        let titleList = new Array();
        app.use(bodyParser.json());       // to support JSON-encoded bodies
        app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
          extended: true
        }));
        
        app.use(function (req: express.Request, res: express.Response, next) {
          res.header("Access-Control-Allow-Origin", "*");
          next();
        });
        

    }
}
const titleServer = new TitleServer();
titleServer.getConnection();
export default titleServer;
