import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {FormComponent} from './form/form.component';
import {SecondComponent} from './second/second.component';
import {DeactivateGuard} from './deactivate.guard';

const routes: Routes = [
    {
        component: LayoutComponent,
        path: '',
        children: [
            {
                component: FormComponent,
                path: '',
                canDeactivate: [DeactivateGuard]
            },
            {
                component: SecondComponent,
                path: 'second'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
