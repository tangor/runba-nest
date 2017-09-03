import "reflect-metadata";
import { createConnection } from "typeorm";
import { Project } from "../models/projects";

createConnection({
  name: "sqlite",
  type: "sqlite",
  database: "./temp/development",
  entities: [
    Project
  ],
  autoSchemaSync: true,
}).then(connection => {
  console.log("created connections");
    // here you can start to work with your entities
}).catch(error => console.log(error));
