import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {FormControl} from '@angular/forms';
import {Observable, Subject, Subscription} from 'rxjs';
import {debounceTime, switchMap, tap} from 'rxjs/operators';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
    public formControl: FormControl;
    private _subscription: Subscription = new Subscription();
    data$: Observable<string[]>;

    constructor(private _main: MainService) {
        this.data$ = this._main.data$.pipe(
            //tap(console.log.bind(console))
        );
    }

    ngOnInit(): void {
        this.formControl = new FormControl('');
        this._subscription.add(this.formControl.valueChanges.pipe(
            debounceTime(1000),
            switchMap(() => {
                return this._main.save$(this.formControl.value).pipe(
                    tap(()=>this.formControl.markAsPristine())
                )
            })
        ).subscribe());


    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

}
