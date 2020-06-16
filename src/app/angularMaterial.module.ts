import { NgModule } from "@angular/core";
import {MatCardModule,} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    imports:[MatCardModule, MatButtonModule,MatInputModule,MatToolbarModule,MatSelectModule,MatTableModule,MatIconModule,
        MatTooltipModule,MatMenuModule,MatPaginatorModule, MatDialogModule, MatGridListModule],
    exports:[MatCardModule, MatButtonModule,MatInputModule,MatToolbarModule,MatSelectModule,MatTableModule,MatIconModule,
        MatTooltipModule,MatMenuModule,MatPaginatorModule, MatDialogModule, MatGridListModule],
})

export class AngularMaterialModule{
    
}