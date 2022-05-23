import { Test, TestingModule } from '@nestjs/testing';
import { StudentregistrationController } from './studentregistration.controller';

describe('StudentregistrationController', () => {
  let controller: StudentregistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentregistrationController],
    }).compile();

    controller = module.get<StudentregistrationController>(StudentregistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
