import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
	selector: 'ng-tags-default-example',
	templateUrl: './tags-default-example.component.html',
	styleUrls: ['./tags-default-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [NgSelectComponent, JsonPipe],
})
export class TagsDefaultExampleComponent implements OnInit {
	selectedCompany;

	ngOnInit() {}
}
