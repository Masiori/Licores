import { Entity } from "typeorm";
import { Column, Double, IntegerType, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Licore {
    @PrimaryGeneratedColumn('uuid')
    id:String
    @Column(('text'),
{
    unique:(false)
})tipo:String

@Column(('number'),
{
    unique:(false)
})cantidad:number

@Column(('number'),
{
    unique:(false)
})stock:number

@Column(('text'),
{
    unique:(false)
})fechaPedido:String

@Column(('text'),
{
    unique:(true)
})contactoProveedor:String

@Column(('number'),
{
    unique:(true)
})minimoBotellas:number

@Column(('text'),
{
    unique:(true)
})eventoID:String
}
