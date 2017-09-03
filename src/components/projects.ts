import { Component } from "@nestjs/common";

@Component()
export class ProjectsService {
  public getAll() {
    return [];
  }

  public get(id: number) {
    return {
      id: id,
      name: "name" + id
    };
  }
}
