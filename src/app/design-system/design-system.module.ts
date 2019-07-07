import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './componentes/table/table.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  exports: [TableComponent]
})
export class DesignSystemModule {}
