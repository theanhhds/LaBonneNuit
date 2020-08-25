import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

	constructor(private myS: MyServiceService) { }

	ngOnInit(): void {
		this.getMenuList();
	}

	menu_list;
	
	getMenuList(){
		this.myS.getMenuList().subscribe(res => {
			this.menu_list = res["data"];
		});
	}
}
