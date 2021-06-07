import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeTableComponent } from './fe-table/fe-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [FeTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    FeTableComponent,
  ]
})
export class CoreCommonModule { }
