import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
// import { Validator, EventSubscriber } from "typeorm";

// import { server } from "../server"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;
}
