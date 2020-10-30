import { Test, TestingModule } from '@nestjs/testing';
import { Paciente } from './paciente.entity';

describe('Paciente', () => {
  let provider: Paciente;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Paciente],
    }).compile();

    provider = module.get<Paciente>(Paciente);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
