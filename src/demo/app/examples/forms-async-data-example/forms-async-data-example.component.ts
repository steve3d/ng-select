import { Component, OnInit, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { delay } from 'rxjs/operators';
import { DataService } from '../data.service';
import { NgOptionHighlightDirective } from '@ng-select/ng-option-highlight';

@Component({
	selector: 'ng-forms-async-data-example',
	templateUrl: './forms-async-data-example.component.html',
	styleUrls: ['./forms-async-data-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [FormRoot, FormField, NgSelectComponent, NgOptionTemplateDirective, NgOptionHighlightDirective],
})
export class FormsAsyncDataExampleComponent implements OnInit {
	private dataService = inject(DataService);

	readonly hero = signal({ album: null as number | null });
	readonly heroForm = form(this.hero);
	albums = [];
	allAlbums = [];

	ngOnInit() {
		this.loadAlbums();
	}

	openSelect(select: NgSelectComponent) {
		select.open();
	}

	closeSelect(select: NgSelectComponent) {
		select.close();
	}

	selectAlbumsRange(from, to) {
		this.albums = this.allAlbums.slice(from, to);
	}

	selectFirstAlbum() {
		this.hero.update((hero) => ({ ...hero, album: this.albums[0].id }));
	}

	private loadAlbums() {
		this.dataService
			.getAlbums()
			.pipe(delay(500))
			.subscribe((albums) => {
				this.allAlbums = albums;
				this.albums = [...this.allAlbums];
				this.selectFirstAlbum();
			});
	}
}
