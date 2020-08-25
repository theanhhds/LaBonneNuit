import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class MyServiceService {
	// Local: 	http://localhost:8000	//For testing
	// Public:	<Your URL here>			//For Production
	url = "http://localhost:8000";
	headers = {"Content-Type": "application/json"};
	
	constructor(private http: HttpClient) { }
	
	saveReservation(data) {
		// console.log("service");
		return this.http.post(this.url + "/makeReservation", data);
	}
	
	getReservation(){
		return this.http.post(this.url + "/getReservationList", this.headers);
	}
	
	addMenu(data){
		return this.http.post(this.url + "/addMenu", data);
	}
	
	getMenuList(){
		return this.http.get(this.url + "/getMenu");
	}
	
	wakeUp(){
		return this.http.get(this.url + "/wake");
	}
}
