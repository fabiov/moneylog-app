import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchList(): Observable<object> {
    return this.http.get(environment.apiUrl + '/api/movements', {headers: {Authorization: 'Bearer ' + environment.apiKey}});
  }
}
