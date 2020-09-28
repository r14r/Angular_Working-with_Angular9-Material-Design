import { Component, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class DialogContentComponent {
	constructor(
		@Optional() public dialogRef: MatDialogRef<DialogContentComponent>,
	) {}
}
