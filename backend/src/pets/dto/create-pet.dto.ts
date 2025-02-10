import { IsDateString, IsEnum, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreatePetDto {
  @IsNotEmpty({message: 'O nome é obrigatório'})
  @IsString()
  name: string;

  @IsNotEmpty({message: 'O nome do dono é obrigatório'})
  @IsString()
  ownerName: string;

  @IsNotEmpty({message: 'O telefone é obrigatório'})
  @IsString()
  @Matches(/^\(\d{2}\) \d{4,5}-\d{4}$/,
    {message: 'Formato de telefone inválido. Use: (99) 99999-9999'}
  )
  phone: string;

  @IsNotEmpty({message: 'A data ded nascimento é obrigatória'})
  @IsDateString()
  birthDate: string;

  @IsNotEmpty({message: 'O tipo de animal é obrigatório'})
  @IsEnum(['cachorro', 'gato'], {message: 'O tipo deve ser cachorro ou gato'})
  type: 'cachorro' | 'gato';

  @IsNotEmpty({message: 'A raça é obrigatória'})
  @IsString()
  breed: string;
}