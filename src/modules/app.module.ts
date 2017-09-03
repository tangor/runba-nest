import { Module } from "@nestjs/common";

import { UsersController } from "../controllers/users";
import { ProjectsController } from "../controllers/projects";
import { UsersService } from "../components/users";
import { ProjectsService } from "../components/projects";

@Module({
  modules: [],
  controllers: [
    UsersController,
    ProjectsController
  ],
  components: [
    ProjectsService,
    UsersService
  ]
})
export class ApplicationModule {}
