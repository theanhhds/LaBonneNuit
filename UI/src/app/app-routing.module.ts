import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MakeRsComponent } from './make-rs/make-rs.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "admin", component: AdminComponent},
	{path: "menu", component: MenuListComponent},
	{path: "make_reservation", component: MakeRsComponent},
	{path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
