import { Component, Optional, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { HelperService } from './shared/helper.service';
import { ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	private helper = new HelperService(this.constructor.name);

	/*
	shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
		h.test(window.location.host),
	);
    */
	shouldRun = true;

	mobileQuery: MediaQueryList;

	fillerContent = Array.from({ length: 50 }, () => ' Lorem ipsum dolor sit amet');

	private _mobileQueryListener: () => void;

	constructor(route: ActivatedRoute, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		/* route.params.subscribe(params => this.helper.log('side menu id parameter', params['id'])); */

		this._mobileQueryListener = () => changeDetectorRef.detectChanges();

		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit() {}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
