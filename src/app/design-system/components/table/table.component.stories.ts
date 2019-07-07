import { dataSource } from './table-datasource';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { DesignSystemModule } from '../../design-system.module';

const metadata = moduleMetadata({
  imports: [DesignSystemModule]
});

storiesOf('Table Component', module)
  .addDecorator(metadata)
  .add('story name', () => ({
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
  }));
