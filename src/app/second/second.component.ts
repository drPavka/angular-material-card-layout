import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {
    public data$: Observable<string[]>;
    private _subscription: Subscription = new Subscription();

    constructor(private _main: MainService) {
    }

    ngOnInit(): void {
        this.data$ = this._main.data$;
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

}
