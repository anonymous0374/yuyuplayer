import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResourceService {
  public resources: any [] = [];

  constructor(private http: HttpClient) { 
  
  }

  public getResources(): Promise<any> {
    if (this.resources.length === 0) {
      console.log('giving promises');
      let url = 'assets/resources.json';
      
      return this.http.get(url).toPromise();   
    };
                  
    return Promise.resolve(this.resources);
  };

}
