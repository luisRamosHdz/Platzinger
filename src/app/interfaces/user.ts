///Una interface es lo mas parecido a una clase
//// ? para los campos opcionales
export interface User{
    nick: string;
    subnick?: string;
    age?: number;
    email:string;
    friend: boolean;
    status:string;
    uid: any;
}