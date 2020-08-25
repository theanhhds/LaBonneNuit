import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {
	}
	clickCount = 0;
	openAdminPanel(){
		this.clickCount++;
		// console.log(this.clickCount);
		if (this.clickCount == 5){
			this.router.navigate(['/admin']);
			this.clickCount = 0;
		}
	}
}
