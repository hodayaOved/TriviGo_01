import { FormGroup } from "@angular/forms";

export class checkpasword  {
    public static check(password1: any, password2: any) {
        return (fg: FormGroup) => {
            let a = fg.controls[password1].value;
            let b = fg.controls[password2].value;
            if (a == b)
                return null;
            return { 'checkError': { message: "the confirmation is wrong!!!" } }
        }

    }

}


