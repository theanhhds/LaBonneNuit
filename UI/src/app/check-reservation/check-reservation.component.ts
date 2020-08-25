import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-check-reservation',
  templateUrl: './check-reservation.component.html',
  styleUrls: ['./check-reservation.component.css']
})
export class CheckReservationComponent implements OnInit {

  constructor(private myS : MyServiceService) { }
  reservations = new Array();
  ngOnInit(): void {
		this.myS.getReservation().subscribe(res => {
			let data = res["data"];
			// Filtering only on comming reservations
			let filterd_data = new Array();
			let date = this.getDate();
			data.forEach((i) => {
				if (i.date.year+i.date.month+i.date.date >= date)
					filterd_data.push(i);
			});
			// console.log(filterd_data);
			this.reservations = filterd_data;
		});
	}
  
	getDate() {
		var d = new Date(),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();
		if (month.length < 2) 
			month = '0' + month;
		if (day.length < 2) 
			day = '0' + day;
		return year+month+day;
	}

}
