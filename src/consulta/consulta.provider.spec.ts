import { Test, TestingModule } from '@nestjs/testing';
import { Consulta } from './consulta';

describe('Consulta', () => {
  let provider: Consulta;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Consulta],
    }).compile();

    provider = module.get<Consulta>(Consulta);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
