import { Controller, Get, Post, HttpStatus } from "@nestjs/common";
// import { Request, Response, NextFunction } from "express";
import { Req, Res, Request, Response, Param, Next } from "@nestjs/common";

import { UsersService } from "../components/users";

@Controller("users")
export class UsersController {

  constructor(private usersService: UsersService) {}

  // @Get()
  // getAllUsers(req: Request, res: Response, next: NextFunction) {
  //   console.log("get users list.")
  //   res.status(HttpStatus.OK).json([{
  //     id: 1, name: "Test"
  //   }])
  // }

  @Get("/:id")
  public async getUser(@Res() res: any, @Param("id") id: any) {
    const user = await this.usersService.get(id);
    res.status(HttpStatus.OK).json(user);
  }

  // @Post()
  // addUser() {
  //
  // }
}
