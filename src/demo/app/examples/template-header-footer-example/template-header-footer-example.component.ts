import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { NgFooterTemplateDirective, NgHeaderTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';

@Component({
	selector: 'ng-template-header-footer-example',
	templateUrl: './template-header-footer-example.component.html',
	styleUrls: ['./template-header-footer-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [NgSelectComponent, NgHeaderTemplateDirective, NgFooterTemplateDirective],
})
export class TemplateHeaderFooterExampleComponent implements OnInit {
	private dataService = inject(DataService);

	people = [];
	selectedPeople = [];

	ngOnInit() {
		this.dataService.getPeople().subscribe((items) => {
			this.people = items;
		});
	}

	selectAll() {
		this.selectedPeople = this.people.map((x) => x.name);
	}

	unselectAll() {
		this.selectedPeople = [];
	}
}
