import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Movement} from '../../models/movement.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MovementService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchList(): Observable<Movement[]> {
    return this.http
      .get(environment.apiUrl + '/api/movements', {headers: {Authorization: 'Bearer ' + environment.apiKey}})
      .pipe(map(data => {
        return data['hydra:member'].map(item => {
          return new Movement(item);
        });
      }));
  }
}
