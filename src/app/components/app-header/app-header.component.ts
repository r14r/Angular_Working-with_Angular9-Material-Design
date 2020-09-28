import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HelperService } from 'src/app/shared/helper.service';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
	private helper = new HelperService(this.constructor.name);

	shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
		h.test(window.location.host),
	);

	constructor(
		private matDialog: MatDialog,
		private matSnackbar: MatSnackBar,
	) {
		this.helper.log('constructor');
	}

	ngOnInit() {}
}
