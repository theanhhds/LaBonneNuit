import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
/* Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MakeRsComponent } from './make-rs/make-rs.component';
import { AdminComponent } from './admin/admin.component';
import { CheckReservationComponent } from './check-reservation/check-reservation.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	NavbarComponent,
	MakeRsComponent,
	AdminComponent,
	CheckReservationComponent,
	AddMenuComponent,
	MenuListComponent,
	FooterComponent,
	ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	HttpClientModule,
	AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
