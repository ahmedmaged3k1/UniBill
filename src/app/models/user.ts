export interface User {
    name : string ,
    phoneNumber:string,
    password :  string , 
    email : string , 
    paymentType : PaymentType
}
enum PaymentType{
    postPaid =0, 
    prePaid =1
}
