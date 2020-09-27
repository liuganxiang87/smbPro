import { NgModule } from '@angular/core';
import { ClickStopDirective } from './click-stop/click-stop';
import { DebounceClickDirective } from './debounceClick/debounce-click.directive';
import { DebounceInputDirective } from './inputDebounce/input-debounce.directive';
import { BracketFormatPipe } from '../pipes/bracket-format.pipe';
import { FilterStrAllPipe } from '../pipes/filter-str-all.pipe';
import { DynamicComponentDirective } from './dynamicComponent/dynamic-component.directive';



@NgModule({
	declarations: [ClickStopDirective, DebounceClickDirective, DebounceInputDirective, BracketFormatPipe, FilterStrAllPipe, DynamicComponentDirective],
	imports: [],
	exports: [ClickStopDirective, DebounceClickDirective, DebounceInputDirective, BracketFormatPipe, FilterStrAllPipe, DynamicComponentDirective]
})
export class DirectivesModule { }
