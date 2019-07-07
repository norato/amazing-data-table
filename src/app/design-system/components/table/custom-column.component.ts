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
    <span [innerHTML]="currentValue"></span>
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
    const rowValue = this.customColumn.row ? this.row : this.row[this.column];

    this.currentValue = this.customColumn.pipe.transform(
      rowValue,
      this.customColumn.args
    );
  }
}
