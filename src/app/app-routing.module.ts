import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home/page';
import { DemoPageComponent } from './pages/demo/page';

import { HelperService } from './shared/helper.service';
import { TreeComponent } from './blocks/material/tree/component';

import { DragDropComponent } from './blocks/material/drag-drop/component';
import { DashboardComponent } from './blocks/material/dashboard/component';
import { AddressFormComponent } from './blocks/material/address-form/component';
import { NavComponent } from './blocks/material/nav/component';

import { TableComponent } from './blocks/material/table/component';
import { TableBasicComponent } from './blocks/material/table/basic/component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'demo', component: DemoPageComponent },
	{ path: 'material/tree', component: TreeComponent },
	{ path: 'material/table', component: TableComponent },
	{ path: 'material/table/basic', component: TableBasicComponent },

	{ path: 'material/dragdrop', component: DragDropComponent },
	{ path: 'material/dashboard', component: DashboardComponent },
	{ path: 'material/addressform', component: AddressFormComponent },
	{ path: 'material/nav', component: NavComponent },

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
	private helper = new HelperService(this.constructor.name);

	constructor() {
		this.helper.log('constructor');
	}
}
