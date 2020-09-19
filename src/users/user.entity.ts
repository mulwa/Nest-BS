import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar", length: 25 })
    firstname:string;

    @Column({type:"varchar", length: 25 })
    surname:string;

    @Column({type:"bigint"})
    idNumber:string;   

    @Column()
    mobileNumber:string;

    @Column({ length: 25 })
    emailAddress:string;

    @Column({ length: 25 })
    county:string;

    @Column({ length: 25 })
    location:string;
}
