import { Entity, Column, PrimaryColumn, BeforeInsert, ManyToOne  } from 'typeorm';
import { ulid } from 'ulid';
import { Paciente } from '../paciente/paciente.entity';

@Entity()
export class Consulta {
  @PrimaryColumn()
  id: string;

  
  @Column()
  data: Date;

  
  @ManyToOne (() => Paciente, paciente => paciente.consultas)
    paciente: Paciente;

  @BeforeInsert()
    setId(){
        this.id = ulid()
    }
}