import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './componentes/table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, CdkTableModule, BrowserAnimationsModule],
  exports: [TableComponent]
})
export class DesignSystemModule {}
