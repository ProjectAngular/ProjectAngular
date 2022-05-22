import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationController } from './controller/registration/registration.controller';
import { RegistrationService } from './services/registration/registration.service';
import { Course } from './entity/course';
import { Courseowner } from './entity/courseowner';
import { Teacher } from './entity/teacher';
import { Student } from './entity/student';
import { Register } from './entity/register';
import { History } from './entity/history';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
    TypeOrmModule.forFeature([Courseowner]),
    TypeOrmModule.forFeature([Teacher]),
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forFeature([Register]),
    TypeOrmModule.forFeature([History]),
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
