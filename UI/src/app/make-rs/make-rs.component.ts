import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-make-rs',
  templateUrl: './make-rs.component.html',
  styleUrls: ['./make-rs.component.css']
})
export class MakeRsComponent implements OnInit {
	
	reservation = new FormGroup({
		name: new FormControl('', Validators.required),
		date : new FormControl('', Validators.required),
		time : new FormControl('', Validators.required),
		phone : new FormControl('', Validators.required),
	});
	
	times = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
	
	constructor(private myS : MyServiceService) { }
	date;
	ngOnInit(): void {
		this.date = new Date();
	}
	
	closeModal(){
		document.getElementById("modal_confirm_reservation").style.display = "none";
	}
	
	handleReservation(){
		// console.log(this.reservation.value);
		let name = this.reservation.value.name;
		let phone = this.reservation.value.phone;
		let time = this.reservation.value.time;
		let date = {year: this.reservation.value.date.split('-')[0], 
					month: this.reservation.value.date.split('-')[1], 
					date: this.reservation.value.date.split('-')[2]};
		let data = {name: name, phone: phone, time: time, date : date};
		// console.log(data);
		
		this.myS.saveReservation(data)
		.subscribe(res => {
			if (res["status"] == "ok"){
				document.getElementById("modal_confirm_reservation").style.display = "block";
			}
		});
	}

}
