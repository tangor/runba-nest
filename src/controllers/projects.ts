import { Controller, Get, Post, HttpStatus } from "@nestjs/common";
// import { Request, Response, Param, Next } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { ProjectsService } from "../components/projects";

@Controller("projects")
export class ProjectsController {

  constructor(private projectsService: ProjectsService) {}

  @Get()
  // async getAll(@Response() res) {
  public async getAll(res: Response) {
    console.log("get projects list.");
    // console.log(req);
    const projects = await this.projectsService.getAll();
    res.status(HttpStatus.OK).json(projects);
  }

  @Get("/:id")
  // async get(@Response() res, @Param("id") id) {
  public async get(req: Request, res: Response) {
    const id = req.params.id;
    const project = this.projectsService.get(id);
    res.status(HttpStatus.OK).json(project);
  }

  @Post()
  public add() {
    // ...
  }
}
