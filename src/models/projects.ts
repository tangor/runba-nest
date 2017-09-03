import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
// import { Validator, EventSubscriber } from "typeorm";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;
}
