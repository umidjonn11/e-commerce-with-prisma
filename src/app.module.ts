import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [UsersModule, CountriesModule], 
  providers: [PrismaService],
})
export class AppModule {}
