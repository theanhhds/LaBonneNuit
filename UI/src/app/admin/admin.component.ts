import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
  
	openAddMenu(){
		document.getElementById("add_menu").style.display = "block";
	}
	
	closeAddMenu(){
		document.getElementById("add_menu").style.display = "none";
	}

}
