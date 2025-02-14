import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreatePetDto {
  @ApiProperty({
    example: 'Simba Farias',
    description: 'Nome do pet'
  })
  @IsNotEmpty({message: 'O nome é obrigatório'})
  @IsString()
  petName: string;

  @ApiProperty({
    example: 'Emmanuel Farias',
    description: 'Nome do dono do pet'
  })
  @IsNotEmpty({message: 'O nome do dono é obrigatório'})
  @IsString()
  ownerName: string;

  @ApiProperty({
    example: '(81) 98240-2134',
    description: 'Telefone do dono'
  })
  @IsNotEmpty({message: 'O telefone é obrigatório'})
  @IsString()
  @Matches(/^\(\d{2}\) \d{4,5}-\d{4}$/,
    {message: 'Formato de telefone inválido. Use: (99) 99999-9999'}
  )
  phone: string;

  @ApiProperty({
    example: '2020-08-22',
    description: 'Data de nascimento do pet'
  })
  @IsNotEmpty({message: 'A data de nascimento é obrigatória'})
  @IsDateString()
  birthDate: string;

  @ApiProperty({
    example: 'gato',
    description: 'Tipo de animal'
  })
  @IsNotEmpty({message: 'O tipo de animal é obrigatório'})
  @IsEnum(['cachorro', 'gato'], {message: 'O tipo deve ser cachorro ou gato'})
  type: 'cachorro' | 'gato';

  @ApiProperty({
    example: 'Persa',
    description: 'Raça do pet'
  })
  @IsNotEmpty({message: 'A raça é obrigatória'})
  @IsString()
  breed: string;
}