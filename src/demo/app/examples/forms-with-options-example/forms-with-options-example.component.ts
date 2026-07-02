import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { NgOptionComponent, NgSelectComponent } from '@ng-select/ng-select';

@Component({
	selector: 'ng-forms-with-options-example',
	templateUrl: './forms-with-options-example.component.html',
	styleUrls: ['./forms-with-options-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [FormRoot, FormField, NgSelectComponent, NgOptionComponent],
})
export class FormsWithOptionsExampleComponent implements OnInit {
	basePath;
	readonly hero = signal({
		heroId: 'batman',
		agree: null as boolean | null,
	});
	readonly heroForm = form(this.hero);

	ngOnInit() {
		this.basePath = window.location.host.includes('localhost') ? '' : '/ng-select';
	}
}
