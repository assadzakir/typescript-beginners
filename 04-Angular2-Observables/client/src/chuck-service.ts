import {Http, Headers, HTTP_BINDINGS} from 'angular2/http';
import {Inject} from 'angular2/angular2'

export class ChuckService {

    constructor( @Inject(Http) public http: Http) { 
        
    }

    getQuote(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:3001/api/random-quote')
                // .map(res => res.text())
                .subscribe(
                data => resolve(data),
                err => reject(err),
                () => console.log("Random Quote Complete")
                );
        })
    }
}