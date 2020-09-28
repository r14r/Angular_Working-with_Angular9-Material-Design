import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelperService } from 'src/app/shared/helper.service';

@Component({
	selector: 'app-footer',
	templateUrl: './app-footer.component.html',
	styleUrls: ['./app-footer.component.scss'],
})
export class AppFooterComponent implements OnInit {
	private helper = new HelperService(this.constructor.name);

	constructor(
		private matDialog: MatDialog,
		private matSnackbar: MatSnackBar,
	) {
		this.helper.log('constructor');
	}

	ngOnInit() {}
}
