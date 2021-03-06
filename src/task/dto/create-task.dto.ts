import {IsNotEmpty} from "class-validator";
import {PrimaryGeneratedColumn} from "typeorm";

//Model
export class CreateTaskDto {
    //Use Pipe
    @PrimaryGeneratedColumn()
    id: number;
    @IsNotEmpty()
    tasking: string;
    ctgr:[];
    user:number;
    endDate:string;
}
