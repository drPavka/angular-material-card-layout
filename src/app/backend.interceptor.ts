import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return of(new HttpResponse({
            status: 200,
            body: [
                'Іванов',
                'Петрів',
                'Сидорів',
                'Охуїв',
                'Квітка-Основ\'яненко',
                'Мамашвілі',
                'Копистиринський',
                'Уc',
                'Бебешко',
                'Безручко',
                'Бойко',
                'Ботярко',
                'Брунько',
                'Валько',
                'Величко',
                'Гомілко',
                'Данилко',
                'Забужко',
                'Зленко',
                'Зрайко',
                'Зубко',
                'Кличко',
                'Лешко',
                'Лиско',
                'Ляшко',
                'Максімко',
                'Маціборко',
                'Мицко',
                'Мрічко',
                'Наливайко',
                'Настобурко',
                'Остроушко',
                'Панько',
            ]
        }));
    }
}
