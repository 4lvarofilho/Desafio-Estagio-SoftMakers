import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet {
  @ApiProperty({
    example: '1',
    description: 'ID do pet'
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Simba Farias',
    description: 'Nome do pet'
  })
  @Column()
  petName: string;

  @ApiProperty({
    example: 'Emmanuel Farias',
    description: 'Nome do dono do pet'
  })
  @Column()
  ownerName: string;

  @ApiProperty({
    example: '(81) 98420-2134',
    description: 'Telefone do dono'
  })
  @Column()
  phone: string;

  @ApiProperty({
    example: '2020-08-22',
    description: 'Data de nascimento do pet'
  })
  @Column()
  birthDate: Date;

  @ApiProperty({
    example: 'gato',
    description: 'Tipo do animal',
    enum: ['cachorro', 'gato']
  })
  @Column()
  type: 'cachorro' | 'gato';

  @ApiProperty({
    example: 'Persa',
    description: 'Raça do pet'
  })
  @Column()
  breed: string;
}