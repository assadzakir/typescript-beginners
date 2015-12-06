import {Component, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Headers, HTTP_BINDINGS} from 'angular2/http';
import {ChuckService} from "./chuck-service";

@Component({
    selector: 'hello-app',
template: `
    {{quoteOfTheDay}}<br />
    <button (click) = "getQuote()">Get new quote</button><br /><br />
    `,
    directives: [CORE_DIRECTIVES],
    providers: [ChuckService, HTTP_BINDINGS]
})

export class HelloApp {
    quoteOfTheDay: string = '';

    constructor(public _chuckService: ChuckService) {
    }

    getQuote(){
        this._chuckService.getQuote().then((resp) => this.quoteOfTheDay = resp._body);
    }
}

bootstrap(HelloApp);