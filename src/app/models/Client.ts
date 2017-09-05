export interface Client {
  $key?:string,
  firstName:string,
  lastName:string,
  email:string,
  phone:string,
  subjects:string[],
  location:{
    city:string,
    state:string,
    street:string,
    zip:string
  }
}