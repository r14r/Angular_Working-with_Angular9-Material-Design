import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './datasource';

import { HelperService } from 'src/app/shared/helper.service';

@Component({
	selector: 'app-table',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class TableComponent implements AfterViewInit, OnInit {
	private helper = new HelperService('TableComponent');

	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort: MatSort;
	@ViewChild(MatTable, { static: false }) table: MatTable<TableItem>;

	dataSource: TableDataSource;

	/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
	displayedColumns = ['id', 'name'];

	ngOnInit() {
		this.dataSource = new TableDataSource();

		this.helper.log('ngOnInit', 'dataSource=' + this.dataSource);
		console.table(this.dataSource.data);
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
		this.table.dataSource = this.dataSource;
	}
}
