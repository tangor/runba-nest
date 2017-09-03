import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./modules/app.module";

import { createConnection } from "typeorm";
import { Project } from "./models/projects";

const app = NestFactory.create(ApplicationModule);
app.listen(3000, () => console.log("Application is listening on port 3000."));

createConnection({
  type: "sqlite",
  database: "./temp/development.sqlite3",
  entities: [
    Project
  ],
  autoSchemaSync: true,
}).then(connection => {
  console.log("created connections");
  connection.query("CREATE DATABASE IF NOT EXISTS");
    // here you can start to work with your entities
}).catch(error => console.log(error));
