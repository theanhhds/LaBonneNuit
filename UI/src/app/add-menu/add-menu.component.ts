import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

	constructor(private fb : FormBuilder, private myS: MyServiceService) { }
	message = "";
	add_menu_form = this.fb.group({
		name: ['', Validators.required],
		description: ['', Validators.required],
		type: ['', Validators.required],
		price: ['', Validators.required]
	});

	ngOnInit(): void {
	}
	
	handleAddMenu(){
		let name = this.add_menu_form.value.name;
		let description = this.add_menu_form.value.description;
		let type = this.add_menu_form.value.type;
		let price = this.add_menu_form.value.price;
		let data = {name: name, description: description, type: type, price: price};
		// console.log(data);
		this.myS.addMenu(data).subscribe((res) => {
			if (res["status"] == "ok"){
				// console.log(res);
				this.message = "Dish added to menu!";
				this.add_menu_form.reset();
				setTimeout(() => {this.message = "";}, 5000);
			}
		});
	}
	
	@Output() closeModal = new EventEmitter<string>();
	
	closeMenuModal(){
		this.closeModal.emit("close");
	}

}
