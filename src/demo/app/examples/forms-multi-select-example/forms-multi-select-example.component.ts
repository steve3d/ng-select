import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
	selector: 'ng-forms-multi-select-example',
	templateUrl: './forms-multi-select-example.component.html',
	styleUrls: ['./forms-multi-select-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [FormRoot, FormField, NgSelectComponent],
})
export class FormsMultiSelectExampleComponent {
	readonly hero = signal({ selectedCitiesIds: [] as number[] });
	readonly heroForm = form(this.hero);
	isCitiesControlVisible = true;
	cities: any[] = [
		{ id: 1, name: 'New York' },
		{ id: 2, name: 'London' },
		{ id: 3, name: 'Beijing' },
		{ id: 4, name: 'New Delhi (Disabled)', disabled: true },
		{ id: 5, name: 'Paris' },
	];

	toggleCitiesControl() {
		this.isCitiesControlVisible = !this.isCitiesControlVisible;
	}

	clearCities() {
		this.hero.update((hero) => ({ ...hero, selectedCitiesIds: [] }));
	}
}
