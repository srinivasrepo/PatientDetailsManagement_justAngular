import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  @Input() headers:any=[];
  displayedColumns:any = [];
  @Input() dataSource:any = [];
  @Input() actions: any = [];
  filteredArray: Array<any>=["View","Edit","Delete"];
  @Output() onActionClicked: EventEmitter<any> = new EventEmitter();
  actionIcons: Map<string, string> = new Map<string, string>();
  actionToolTip: Map<string, string>= new Map<string, string>();
  
  constructor(){
      
      this.actionIcons.set("Edit","edit");
      this.actionIcons.set("View","visibility");
      this.actionIcons.set("Delete","delete_forever");

      this.actionToolTip.set("Edit","Edit");
      this.actionToolTip.set("Delete","Delete");
      this.actionToolTip.set("View","View");    
  }


  ngOnChanges(){      
      

      if(this.hasValue(this.actions)){
          
          this.displayedColumns = this.headers.map( (header) => header.columnDef).concat(['actions']);            
      }
      else{
      
       return   this.displayedColumns = this.headers.map((c => c.columnDef));
      }
  }

  filterActions(row){       
         return this.actions;   
  }

  OnActionClick(action:any, dataItem:any){
      this.onActionClicked.emit({ action:action, val:dataItem });
  }
 

  ngOnInit(): void {
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
