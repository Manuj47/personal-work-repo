import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// ... existing imports ...

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  signup(@Body() body:any){
    console.log(body);
    return 'hi'
  }

  // ... create and findAll methods ...
   @Post()
   create(@Body() createUserDto: CreateUserDto){
    // return this.usersService.create(createUserDto);
    return 'hi'
   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);  // Remove the +
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);  // Remove the +
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);  // Remove the +
  }
}