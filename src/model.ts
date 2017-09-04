
import { Repository } from "typeorm";

export class Model {

  connection_name: string = "default";
  repository: Repository;

  constructor() {
    // let cm = getConnectionManager();
    // let connection = cm.get();

    user.description = "";
    let userRepository = connection.getRepository(User);
    repository
  }
}
