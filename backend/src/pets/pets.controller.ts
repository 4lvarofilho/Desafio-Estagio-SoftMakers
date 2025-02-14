import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { UpdatePetDto } from "./dto/update-pet.dto";
import { CreatePetDto } from "./dto/create-pet.dto";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Pet } from "./entities/pet.entity";

@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo pet' })
  @ApiResponse({
    status: 201,
    description: 'Pet criado com sucesso',
    type: Pet
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos'
  })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pets' })
  @ApiResponse({
    status: 200,
    description: 'Lista de pets retornada com sucesso',
    type: [Pet]
  })
  findAll(){
    return this.petsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um pet pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do pet'})
  @ApiResponse({
    status: 200,
    description: 'Pet encontrado com sucesso',
    type: Pet
  })
  @ApiResponse({
    status: 404,
    description: 'Pet não encontrado'
  })
  findOne(@Param('id') id:number){
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um pet' })
  @ApiParam({ name: 'id', description: 'ID do pet'})
  @ApiResponse({
    status: 200,
    description: 'Pet atualizado com sucesso',
    type: Pet
  })
  @ApiResponse({
    status: 404,
    description: 'Pet não encontrado'
  })
  update(@Param('id') id:number, @Body() updatePetDto: UpdatePetDto){
    return this.petsService.update(id, updatePetDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um pet' })
  @ApiParam({name: 'id', description: 'ID do pet'})
  @ApiResponse({
    status: 200,
    description: 'Pet removido com sucesso'
  })
  @ApiResponse({
    status: 404,
    description: 'Pet não encontrado'
  })
  remove(@Param('id') id:number){
    return this.petsService.remove(id)
  }
}