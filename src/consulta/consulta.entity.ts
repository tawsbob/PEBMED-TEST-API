import { Entity, Column, PrimaryColumn, BeforeInsert, ManyToOne  } from 'typeorm';
import { ulid } from 'ulid';
import { Paciente } from '../paciente/paciente.entity';

@Entity()
export class Consulta {
  @PrimaryColumn()
  id: string;

  
  @Column()
  data: Date;

  @Column({ length: 1500, nullable: true })
  anotacoes: string

  @ManyToOne (() => Paciente, paciente => paciente.consultas,  { nullable: false })
    paciente: Paciente;

  @BeforeInsert()
    setId(){
        this.id = ulid()
    }
}