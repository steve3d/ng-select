import { Component, OnInit, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { disabled, form, FormField, FormRoot, schema } from '@angular/forms/signals';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { NgOptionHighlightDirective } from '@ng-select/ng-option-highlight';

@Component({
	selector: 'ng-forms-custom-template-example',
	templateUrl: './forms-custom-template-example.component.html',
	styleUrls: ['./forms-custom-template-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [FormRoot, FormField, NgSelectComponent, NgLabelTemplateDirective, NgOptionTemplateDirective, NgOptionHighlightDirective],
})
export class FormsCustomTemplateExampleComponent implements OnInit {
	private modalService = inject(NgbModal);
	private dataService = inject(DataService);

	readonly hero = signal({ photo: '' as string | null });
	readonly photoDisabled = signal(false);
	readonly heroForm = form(
		this.hero,
		schema((p) => {
			disabled(p.photo, { when: () => this.photoDisabled() });
		}),
	);

	photos = [];

	ngOnInit() {
		this.loadPhotos();
	}

	selectFirstPhoto() {
		this.hero.update((hero) => ({ ...hero, photo: this.photos[0].thumbnailUrl }));
	}

	openModal(content) {
		this.modalService.open(content);
	}

	changePhoto(photo) {
		this.hero.update((hero) => ({ ...hero, photo: photo ? photo.thumbnailUrl : null }));
	}

	togglePhotoDisabled() {
		this.photoDisabled.update((disabled) => !disabled);
	}

	private loadPhotos() {
		this.dataService.getPhotos().subscribe((photos) => {
			this.photos = photos;
			this.selectFirstPhoto();
		});
	}
}
