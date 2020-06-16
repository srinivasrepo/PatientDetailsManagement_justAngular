import { NgModule } from "@angular/core";
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angularMaterial.module';



@NgModule({
    declarations:[TableComponent,
                  ],
               
    imports:[CommonModule,
             FormsModule,
            BrowserAnimationsModule,
        ReactiveFormsModule,
    CommonModule,
AngularMaterialModule],
             
    exports:[TableComponent]         
})

export class HelpersModule{
    
}