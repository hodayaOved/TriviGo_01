export class Question{
    constructor(public id:number,
        public question1:string ,
        public correctAnswerId:number,
        public image:string,
        public status:number,
        public level:number,
        public userId:number,
        public points:number ){
        
    }
    
}
