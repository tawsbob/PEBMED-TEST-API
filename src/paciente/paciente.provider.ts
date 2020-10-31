import { Paciente } from './paciente.entity';
import { ProviderConfig } from '../helpers'

export const PacienteProvider = [
  ProviderConfig({ provide: 'PACIENTE_REPOSITORY', repo: Paciente })
];