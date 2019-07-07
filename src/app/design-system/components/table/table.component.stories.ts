import { UpperCasePipe } from '@angular/common';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { DesignSystemModule } from '../../design-system.module';
import { TableCustomColumns } from './custom-column.component';
import { dataSource } from './table-datasource';

const metadata = moduleMetadata({
  imports: [DesignSystemModule]
});

const customColumns: TableCustomColumns = {
  name: {
    pipe: new UpperCasePipe()
  }
};

storiesOf('Table Component', module)
  .addDecorator(metadata)
  .add('default', () => ({
    template: `
    <app-table
      [dataSource]="dataSource"
      [headers]="headers"
      [translationKey]="translationKey"
    ></app-table>`,
    props: {
      dataSource,
      headers: ['id', 'name'],
      translationKey: 'design-system.table.headers'
    }
  }))
  .add('with Custom Column', () => ({
    template: `
    <app-table
      [dataSource]="dataSource"
      [headers]="headers"
      [translationKey]="translationKey"
      [customColumns]="customColumns"
    ></app-table>`,
    props: {
      dataSource,
      headers: ['id', 'name'],
      translationKey: 'design-system.table.headers',
      customColumns
    }
  }));
