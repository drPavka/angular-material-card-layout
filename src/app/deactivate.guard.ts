import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {FormComponent} from './form/form.component';
import {MainService} from './main.service';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<unknown> {

    constructor(private _main: MainService) {
    }

    canDeactivate(
        component: FormComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return (component.formControl.dirty) ? this._main.save$(component.formControl.value).pipe(map(() => true)) : true;
    }

}
