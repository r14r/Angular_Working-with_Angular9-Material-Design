import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppSidemenuComponent } from './components/app-sidemenu/app-sidemenu.component';

import { HomePageComponent } from './pages/home/page';
import { DemoPageComponent } from './pages/demo/page';

import { HelperService } from './shared/helper.service';

@NgModule({
	declarations: [
		AppComponent,
		AppHeaderComponent,
		AppFooterComponent,
		AppSidemenuComponent,
		HomePageComponent,
		DemoPageComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		AppMaterialModule,
		BrowserAnimationsModule,
	],
	providers: [FormBuilder],
	entryComponents: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	private helper = new HelperService(this.constructor.name);

	constructor() {
		this.helper.log('constructor');
	}
}
