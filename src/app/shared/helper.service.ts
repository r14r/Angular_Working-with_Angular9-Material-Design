import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class HelperService {
	private PREFIX: string;

	constructor(private prefix: string) {
		this.PREFIX = prefix;
	}

	public log(module: string, line: string = '') {
		console.log(this.PREFIX + '|' + module + '::' + line);
	}
}
