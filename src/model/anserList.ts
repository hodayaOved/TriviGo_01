import { Ansers } from 'src/model/Ansers';
import { Question } from './Question';
export class AnserList{
    constructor(
        public ansers:Ansers[],
        public question:Question,
        public isSystem:boolean=false,
        public level:string="",
        public userName:string=""
    ){}
}