import { Connection } from 'typeorm';
import { Paciente } from './paciente.entity';


const ProviderConfig = ({ provide, repo })=>({
    provide,
    useFactory: (connection: Connection) => connection.getRepository(repo),
    inject: ['DATABASE_CONNECTION'],
})

export const PacienteProvider = [
  ProviderConfig({ provide: 'PACIENTE_REPOSITORY', repo: Paciente })
];