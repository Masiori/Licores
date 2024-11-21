import { MinLength, IsNotEmpty, IsString, IsNumber, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { NumericType } from "typeorm";

export class CreateLicoreDto {
    @ApiProperty({example: 'vodka',description:'el tipo de licor '})
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    tipo:String;

    @ApiProperty({example: '6', description:'cuantas botellas se piden por orden'})
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    cantidad:number

    @ApiProperty({example: '3', description:'cuantas botellas hay en bodega'})
    @IsNumber()
    @Min(0)
    stock:number

    @ApiProperty({example: '20/10/24', description: 'fecha del medido en formato DD/MM/AA'})
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    fecha:String

    @ApiProperty({example: 'licores buena vista 3148324667', description: 'detalles de contacto de el proveedor'})
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    contacto:String
    
    @ApiProperty({example: '3', description: 'minimo de botella en bodega antes de volver a pedir'})
    @IsNotEmpty()
    @IsNumber()
    @Min(3)
    minimoBotellas:number

    @ApiProperty({example: '23AD79M', description: 'ID de el evento al que se va a servir'})
    @IsString()
    @MinLength(0)
    eventoID:String
}
