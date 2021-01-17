import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

const serverAddress = 'https://everest40-server.azurewebsites.net'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  public url;
  public serverAddress = serverAddress;
  static serverAddress = serverAddress;
  constructor(public http: HttpClient) {
    this.url = `${this.serverAddress}/api/v1/`;
  }

  public getOne(s: string,u): Observable<any> {
    return this.http.get(this.url + u + '/'+ s)
  }

  public getAll(a: any,u): Observable<any> {
    let str = '';

    for (var key in a) {
      if (str != '') {
        str += '&';
      }
      str += key + "=" + encodeURIComponent(a[key]);
    }
    return this.http.get(this.url + u + '?' + str)
  }

  public createOne<T>(o: T, u): Observable<any> {
    return this.http.post(this.url + u, o)
  }

  public updateOne(o: any, u): Observable<any> {
    return this.http.put(this.url + u, o)
  }

  public deleteOne<T>(o: T, u): Observable<any> {
    return this.http.delete(this.url + u + '/' + o)
  }
}
