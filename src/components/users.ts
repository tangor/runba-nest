import { Component } from "@nestjs/common";

@Component()
export class UsersService {
  public getAll(): any {
    return [];
  }

  public get(id: number): any {
    return {
      id: id,
      name: "username" + id
    };
  }
}
