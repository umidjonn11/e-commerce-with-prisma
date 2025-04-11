import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService], // PrismaService is in providers, not imports
})
export class UsersModule {}
