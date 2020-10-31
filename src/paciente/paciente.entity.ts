import { Entity, Column, PrimaryColumn, BeforeInsert, OneToMany } from 'typeorm';
import { Consulta } from '../consulta/consulta.entity';
import { ulid } from 'ulid';

export enum Sexo {
    MASCULINO = "masculino",
    FEMININO = "feminino",
    INDEFINIDO = "indefinido",
}

@Entity()
//@Unique(["name"])
export class Paciente {
  @PrimaryColumn()
  id: string;

  @Column({ length: 180 })
  nome: string

  @Column({ length: 180 })
  telefone: string
  
  @Column()
  nascimento: Date;

  @Column({
    type: "enum",
        enum: Sexo,
        default: Sexo.INDEFINIDO
    })
  sexo: Sexo
  
  @Column('int')
  altura: number

  @Column('int')
  peso: number

  @OneToMany(() => Consulta, consulta => consulta.paciente)
  consultas: Consulta[];

  @BeforeInsert()
    setId(){
        this.id = ulid()
    }
}