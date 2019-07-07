import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Observable } from 'rxjs';
import { dataSource, TableItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements AfterViewInit {
  dataSource: Observable<TableItem[]> = dataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {}
}
