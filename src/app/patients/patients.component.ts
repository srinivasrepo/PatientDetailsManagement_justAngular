import { Component, OnInit } from '@angular/core';
import { PatientsModel, AddressDetails, PatientsListModel } from './model/patientsModel';
import { MatDialog } from '@angular/material/dialog';
import { ConformationComponent } from '../helpers/conformation/conformation.component';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  // Headers : Array<any>= [];
  // actions:Array<string> = ['Edit', 'View', 'Delete'];
  patientDetails: PatientsModel = new PatientsModel();
  addressDetails: AddressDetails = new AddressDetails();
  addressListDetails: Array<AddressDetails> = [];
  patientsListModelObj: PatientsListModel = new PatientsListModel();
  isEditAddress: boolean=false;
  indexValue: number = -1;
  patientIndexValue: number = -1;
  isDisable: boolean = false;
  isEditPatient: boolean = false;
  addressBtnType: string = "Add Address";
  

  constructor(public _matDialog: MatDialog, private _notify:NotifierService) { }


  // ngAfterViewInit(){
//     this.prepareHeaders();
//   }

//   prepareHeaders() {
//     this.Headers = [];
//     this.Headers.push({ "columnDef": "s.no", "header": "S.No", cell: (element: any) => `${element.sno}`});
//     this.Headers.push({ "columnDef": 'firstName', "header": "First Name", cell: (element: any) => `${element.firstName}`});
//     this.Headers.push({ "columnDef": 'lastName', "header": "Last Name", cell: (element: any) => `${element.lastName}`});
//     this.Headers.push({ "columnDef": 'password', "header": "Password", cell: (element: any) => `${element.password}`});
//     this.Headers.push({ "columnDef": 'email', "header": "Email", cell: (element: any) => `${element.email}`});
//     this.Headers.push({ "columnDef": 'mobileNumber', "header": "Mobile Number", cell: (element: any) => `${element.mobileNumber}`});
//     this.Headers.push({ "columnDef": 'gender', "header": "Gender", cell: (element: any) => `${element.gender}`});
//     this.Headers.push({ "columnDef": 'address', "header": "Address", cell: (element: any) => `${element.address}`});
// }

//   edit(element,i ) {
//     // this.manageCustForm.controls.maddress.setValue(element.firstName);
//     // this.manageCustForm.controls.mcountry.setValue(element.lastName);
//     // this.manageCustForm.controls.mstate.setValue(element.password);
//     // this.manageCustForm.controls.mcity.setValue(element.email);
//     // this.manageCustForm.controls.mzip.setValue(element.gender);
//     // this.manageCustForm.controls.mzip.setValue(element.mobileNumber);
//     // this.manageCustForm.controls.mzip.setValue(element.address);
// }

//   onActionClicked(event) {
//     if (event.action == "Edit"){
//        this.edit(event.val,event.val.sno -1);
//        console.log(event.val.sno -1);                
//     } 
//     else if (event.action == "Delete"){
//         let i = event.val.sno - 1;
//         // this.addresslistArray.splice(i, 1);
//         // this.dataSource = new MatTableDataSource(CommonMethods.increaseSNO(this.addresslistArray)); 
//     }
// }

addAddress(){
   let errMsg = this.addressFormValidation(this.addressDetails);
   if(this.hasValue(errMsg))
    return this._notify.notify('warning', errMsg);

   if(this.isEditAddress == true){
    this.addressListDetails[this.indexValue] = this.addressDetails;
    this.addressBtnType = "Add Address";
   }
   else
    this.addressListDetails.push(this.addressDetails);

   this.addressDetails = new AddressDetails();

   this.isEditAddress = false;
}

editAddress(index){
  if(this.addressBtnType == "Save Address")
   return this._notify.notify('warning', "Please save address to continue further");

  this.addressDetails.houseNumber = this.addressListDetails[index].houseNumber ;
  this.addressDetails.streetName = this.addressListDetails[index].streetName ;
  this.addressDetails.city = this.addressListDetails[index].city ;

  this.addressBtnType = "Save Address";
  this.isEditAddress = true;
  this.indexValue=index
}

deleteAddress(index){
  if(this.addressBtnType == "Save Address")
   return this._notify.notify('warning', "Please save address to delete");
  this.addressListDetails.splice(index,1)
}

addressFormValidation(obj){
  if(this.hasValue(!obj.houseNumber))
   return "Please enter house number";
  if(this.hasValue(!obj.streetName))
   return "Please enter street name";
  if(this.hasValue(!obj.city))
   return "Please enter city ";   
}


addPatient(){
  let errMsg = this.patientFormValidation(this.patientDetails);
  if(this.hasValue(errMsg))
   return this._notify.notify('warning', errMsg);
 if(this.isEditPatient == true){
  // this.patientDetails.address = [];
  // this.addressListDetails.forEach(x => this.patientDetails.address.push(x));
  this.patientDetails.address = this.addressListDetails;
  this.patientsListModelObj.list[this.patientIndexValue] = this.patientDetails;
 }
 else{
  this.patientDetails.address = this.addressListDetails;
  this.patientsListModelObj.list.push(this.patientDetails);
 } 

 this.patientDetails = new PatientsModel(); 
 this.isEditPatient = false;
 document.getElementById("modalCloseButton").click();
}

viewPatient(index){
  document.getElementById("modalOpenButton").click();
  this.patientDetails = this.patientsListModelObj.list[index];
  this.addressListDetails = this.patientsListModelObj.list[index].address;
  this.isDisable=true;
}

editPatient(index){
  document.getElementById("modalOpenButton").click();
  // this.patientDetails = this.patientsListModelObj.list[index];
  this.patientDetails.firstName = this.patientsListModelObj.list[index].firstName;
  this.patientDetails.lastName = this.patientsListModelObj.list[index].lastName;
  this.patientDetails.email = this.patientsListModelObj.list[index].email;
  this.patientDetails.password = this.patientsListModelObj.list[index].password;
  this.patientDetails.mobileNumber = this.patientsListModelObj.list[index].mobileNumber;
  this.patientDetails.gender = this.patientsListModelObj.list[index].gender;
  this.addressListDetails = this.patientsListModelObj.list[index].address;

  this.isDisable = false;
  this.isEditPatient = true;
  this.patientIndexValue = index;

}

deletePatient(index){
  const modalRef = this._matDialog.open(ConformationComponent);       
  modalRef.componentInstance.message = "Do you want to delete patient ?";       
   modalRef.afterClosed().subscribe(conformed=>{
     if(conformed){
      this.patientsListModelObj.list.splice(index,1)
     }
     
   })
}

patientFormValidation(obj){

  if(this.hasValue(!obj.firstName))
  return "Please enter first name";
 if(this.hasValue(!obj.lastName))
  return "Please enter last name";
 if(this.hasValue(!obj.password))
  return "Please enter password ";
 if(this.hasValue(!obj.email))
  return "Please enter email ";
 if(!/@gmail.com$/.test(obj.email))
   return "Please enter valid email";
 if(this.hasValue(!obj.mobileNumber))
  return "Please enter valid mobile number ";
 if(obj.mobileNumber.toString().length != 10)
  return "Please enter 10 digits mobile number";
 if(!Number.isInteger(obj.mobileNumber))
 return "Please enter only numbers in mobile number";  
 if(this.hasValue(!obj.gender))
  return "Please enter gender ";
 if(this.addressListDetails.length<1)
   return "Please enter atleat one address"
 if(this.addressBtnType == "Save Address")
   return "Please save address to save patient" 
  }

modalOpenButton(){
  this.patientDetails = new PatientsModel();
  this.addressDetails = new AddressDetails();
  this.addressListDetails = []; 
  this.isDisable = false;
  this.addressBtnType = "Add Address";
}

hasValue(value: any){
  var isValueEmpty:boolean = true;
  if(value=="" || value==null || value==undefined || value=="null" || value=="undefined")
   isValueEmpty=false;
  else if(`${value}`.trim()=="" || value==0)
   isValueEmpty=false;  

  return isValueEmpty; 
}



}
