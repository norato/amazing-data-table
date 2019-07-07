import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { I18nModule } from '../i18n/i18n.module';
import { CustomColumnComponent } from './components/table/custom-column.component';

@NgModule({
  declarations: [TableComponent, CustomColumnComponent],
  imports: [CommonModule, CdkTableModule, BrowserAnimationsModule, I18nModule],
  exports: [TableComponent, CustomColumnComponent]
})
export class DesignSystemModule {}
