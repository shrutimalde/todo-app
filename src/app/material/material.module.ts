import { NgModule } from '@angular/core'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [ 
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [  
    MatGridListModule,  
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],

})

export class MaterialModule {

}
