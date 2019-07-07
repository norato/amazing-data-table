import { moduleMetadata, storiesOf } from '@storybook/angular';
import { DesignSystemModule } from '../../design-system.module';

const metadata = moduleMetadata({
  imports: [DesignSystemModule]
});

storiesOf('Table Component', module)
  .addDecorator(metadata)
  .add('story name', () => ({
    template: `<app-table></app-table>`,
    props: {}
  }));
