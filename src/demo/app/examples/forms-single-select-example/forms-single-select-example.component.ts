import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { disabled, form, FormField, FormRoot, required, schema } from '@angular/forms/signals';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
	selector: 'ng-forms-single-select-example',
	templateUrl: './forms-single-select-example.component.html',
	styleUrls: ['./forms-single-select-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [FormRoot, FormField, NgSelectComponent],
})
export class FormsSingleSelectExampleComponent {
	private modalService = inject(NgbModal);

	readonly hero = signal({ age: null as string | null });
	readonly ageDisabled = signal(false);
	readonly heroForm = form(
		this.hero,
		schema((p) => {
			required(p.age);
			disabled(p.age, { when: () => this.ageDisabled() });
		}),
	);

	ages: any[] = [
		{ value: '<18', label: 'Under 18' },
		{ value: '18', label: '18' },
		{ value: '>18', label: 'More than 18' },
	];

	toggleAgeDisable() {
		this.ageDisabled.update((disabled) => !disabled);
	}

	showConfirm(content) {
		this.modalService.open(content);
	}
}
