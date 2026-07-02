import { Component, NgModule, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

//example-import

@Component({
	selector: 'app-component',
	template: '//example-template',
	standalone: false,
})
export class AppComponent {}

@NgModule({
	imports: [
		BrowserModule,
		NgSelectModule,
		CommonModule,
		//example-cmp
	],
	providers: [provideZonelessChangeDetection(), provideHttpClient(withFetch())],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
