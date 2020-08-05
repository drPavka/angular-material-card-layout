import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    private _request$: Observable<string[]>;
    private _data$$: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
    public data$: Observable<string[]> = this._data$$.asObservable().pipe();

    constructor(private _http: HttpClient) {
        this._request$ = this._http.get('test').pipe(
            map(data => data as string[]),
            tap(data => {
                this._data$$.next(data);
            })
        );
        this._request$.subscribe();
    }

    save$(value) {
        return this._http.put('test', {}).pipe(
            map(data => data as string[]),
            tap(data => {
                console.log(value)
                const newData = [...data, value];
                this._data$$.next(newData);
            })
        );
    }

}
