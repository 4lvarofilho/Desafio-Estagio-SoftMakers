import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import type { PetsService } from "./pets.service";
import type { CreatePetDto } from "./dto/create-pet.dto";
import type { UpdatePetDto } from "./dto/update-pet.dto";

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  findAll(){
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() updatePetDto: UpdatePetDto){
    return this.petsService.update(id, updatePetDto)
  }

  @Delete(':id')
  remove(@Param('id') id:string){
    return this.petsService.remove(id)
  }
}