import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  PipeTransform,
  Input
} from '@angular/core';

interface CustomColumn {
  pipe: PipeTransform;
  args?: any;
  row?: boolean;
}

export interface TableCustomColumns {
  [k: string]: CustomColumn;
}

@Component({
  selector: 'app-custom-column',
  template: `
    <span
      [innerHTML]="customColumn.pipe.transform(currentValue, customColumn.args)"
    ></span>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomColumnComponent implements OnInit {
  @Input() customColumn: CustomColumn;
  @Input() row: any;
  @Input() column: string;

  currentValue: any;

  constructor() {}

  ngOnInit() {
    this.currentValue = this.customColumn.row
      ? this.row
      : this.row[this.column];
  }
}
