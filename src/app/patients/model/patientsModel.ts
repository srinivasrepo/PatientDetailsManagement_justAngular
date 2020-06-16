export class PatientsListModel{
  list:Array<PatientsModel>=[]
}

export class PatientsModel{
  firstName:string;
  lastName:string;
  password:string;
  email:string;
  mobileNumber:number;
  gender:string;
  address:Array<AddressDetails>=[];   
}

export class AddressDetails{
 houseNumber:string;
 streetName:string;
 city:string;
}

