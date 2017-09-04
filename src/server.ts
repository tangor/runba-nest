import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./modules/app.module";

import { Connection, createConnection, getConnectionManager } from "typeorm";
import { Project } from "./models/projects";
import { User } from "./models/users";


export class Server {
  public connection: Connection;

  constructor() {

  }

  // get connection() {
  //   if(!this.connection) {
  //
  //   }
  //   return this.connection;
  // }
}

createConnection({
  name: "default",
  type: "sqlite",
  host: "localhost",
  database: "./tmp/development.sqlite3",
  entities: [
    Project, User
  ],
  autoSchemaSync: true,
}).then(async connection => {
  console.log("created connections");
  // this.connection = connection;

  // let cm = getConnectionManager();
  // let connection = cm.get();

  let user = new User();
  user.name = "username1";
  user.description = "";
  let userRepository = connection.getRepository(User);
  userRepository.save(user);

  let u = await userRepository.findOne();
  console.log(u);

  console.log(await userRepository.findAndCount());
}).catch(error => console.log(error));



// const server = new Server();
const app = NestFactory.create(ApplicationModule);
app.listen(3000, () => console.log("Application is listening on port 3000."));
