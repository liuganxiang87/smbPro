import {Directive, HostListener, Input, EventEmitter, Output, OnDestroy, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';
 
@Directive({
  selector: 'input[appDebounceInput]'
})
/**demo
 * input change变化 输入框防抖事件封装
 * <input [appDebounceInput]="700" (debounceInput)="dealInput(index)">
 */
export class DebounceInputDirective implements OnInit, OnDestroy {
  @Input('appDebounceInput') debounceTime = 500;
  @Output() debounceInput = new EventEmitter();
  private inputs = new Subject<any>();
  private subscription: Subscription;
 
  constructor() {
  }
 
  @HostListener('input', ['event'])
  clickEvent() {
    event.preventDefault();
    event.stopPropagation();
    const value = event.srcElement['value'];
    this.inputs.next(value);
  }
 
  ngOnInit(): void {
    this.subscription = this.inputs.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(e => this.debounceInput.emit(e));
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 
}