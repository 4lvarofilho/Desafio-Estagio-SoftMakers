import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  ownerName: string;

  @Column()
  phone: string;

  @Column()
  birthDate: Date;

  @Column()
  type: 'cachorro' | 'gato';

  @Column()
  breed: string;
}