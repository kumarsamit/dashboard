import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-performance',
	templateUrl: './performance.component.html',
	styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
	inputvalue: any;
	name: string = "interpolation";
	color: string = 'red';


	disabledbox = true;
	alert() {
		if (this.disabledbox == true) {
			this.disabledbox = false;
		}
		else {
			this.disabledbox = true;
		}
	}

	constructor() { }

	ngOnInit(): void {
	}

}
