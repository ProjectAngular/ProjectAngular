import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './registration/entity/course';
import { Courseowner } from './registration/entity/courseowner';
import { Teacher } from './registration/entity/teacher';
import { Student } from './registration/entity/student';
import { Register } from './registration/entity/register';
import { History } from './registration/entity/history';

@Module({
  imports: [
    RegistrationModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/registration.db',
      entities: [Course, Courseowner, Teacher, Student, Register, History],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
