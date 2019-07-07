import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Observable } from 'rxjs';
import { TableCustomColumns } from './custom-column.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnChanges {
  @Input() dataSource: Observable<any[]>;
  @Input() translationKey: string;
  @Input() headers: string[];
  translatedHeaders: { [k: string]: string };

  @Input() customColumns: TableCustomColumns;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.translationKey || changes.headers) {
      this.buildTranslatedHeaders();
    }
  }

  private buildTranslatedHeaders() {
    this.translatedHeaders = this.headers.reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: [this.translationKey, curr].join('.')
      };
    }, {});
  }
}
