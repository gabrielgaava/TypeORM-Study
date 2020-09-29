import "reflect-metadata";
import { createConnection, Connection } from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express();

const startConnection = async () => {
    await createConnection();
};

startConnection();

app.use(bodyParser.json());
app.use(routes);

app.listen(3333);
