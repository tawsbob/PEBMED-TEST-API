import { Entity, Column, PrimaryColumn, BeforeInsert, Unique } from 'typeorm';
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

  @BeforeInsert()
    setId(){
        this.id = ulid()
    }
}