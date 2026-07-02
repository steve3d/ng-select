import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptionComponent, NgSelectComponent } from '@ng-select/ng-select';

@Component({
	selector: 'ng-fixed-placeholder-example',
	templateUrl: './fixed-placeholder-example.component.html',
	styleUrls: ['./fixed-placeholder-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [NgSelectComponent, NgOptionComponent],
})
export class FixedPlaceholderExampleComponent {
	isPlaceholderFixed = false;
}
