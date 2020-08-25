import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	ngOnInit(){
		this.wakeUp();
	}
	constructor(private myS: MyServiceService){
		
	}
	
	wakeUp(){
		// console.log("run");
		this.myS.wakeUp().subscribe((res) => {
			// console.log(res);
			if (res["status"] == "ok"){
				setTimeout( ()=> {document.getElementById("overlay").style.display = "none";}, 1000);
			}
		});
	}
}
