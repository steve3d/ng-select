import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KeyCode } from '../lib/ng-select.types';

export class TestsErrorHandler {}

/** Flush microtasks and macrotasks used by async DOM measurement. */
export async function flushAsync(): Promise<void> {
	await new Promise<void>((resolve) => queueMicrotask(resolve));
	await new Promise<void>((resolve) => setTimeout(resolve, 0));
}

export async function tickAndDetectChanges(fixture: ComponentFixture<any>) {
	await fixture.whenStable();
	await flushAsync();
	await fixture.whenStable();
}

export async function selectOption(fixture: ComponentFixture<any>, key: KeyCode, index: number) {
	triggerKeyDownEvent(getNgSelectElement(fixture), KeyCode.Space); // open
	await tickAndDetectChanges(fixture);
	for (let i = 0; i < index; i++) {
		triggerKeyDownEvent(getNgSelectElement(fixture), key);
	}
	triggerKeyDownEvent(getNgSelectElement(fixture), KeyCode.Enter); // select
}

export function getNgSelectElement(fixture: ComponentFixture<any>): DebugElement {
	return fixture.debugElement.query(By.css('ng-select'));
}

export function getNgSelectNativeElement(fixture: ComponentFixture<any>): HTMLElement {
	return getNgSelectElement(fixture).nativeElement;
}

export function triggerKeyDownEvent(element: DebugElement, key: string, target: Element = null): void {
	const event = new KeyboardEvent('keydown', {
		key,
		bubbles: true,
		cancelable: true,
	});

	if (target) {
		Object.defineProperty(event, 'target', {
			configurable: true,
			value: target,
		});
	}

	element.nativeElement.dispatchEvent(event);
}
