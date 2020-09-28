import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/shared/helper.service';

@Component({
	selector: 'app-sidemenu',
	templateUrl: './app-sidemenu.component.html',
	styleUrls: ['./app-sidemenu.component.scss'],
})
export class AppSidemenuComponent implements OnInit {
	private helper = new HelperService(this.constructor.name);

	navItems = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

	constructor() {}

	ngOnInit() {}
}
