import { Consulta } from './consulta.entity';
import { ProviderConfig } from '../helpers'

export const ConsultaProvider = [
  ProviderConfig({ provide: 'CONSULTA_REPOSITORY', repo: Consulta })
];