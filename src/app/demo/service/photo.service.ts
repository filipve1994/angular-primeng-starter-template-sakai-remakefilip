import { Injectable } from '@angular/core';

import { Image } from '@demo/api/image';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>('assets/demo/data/photos.json')
      .toPromise()
      .then(res => res.data as Image[])
      .then(data => data);
  }
}
