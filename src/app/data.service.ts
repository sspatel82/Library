/* Data service will handle of handling data through out application. */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  favArticles: article[] = [];
  constructor(private http: HttpClient) { }

  /* searchCatalog function will help to send request and get response from open library API. This function will take two parameters. query and page number. That will help in pagination. */
  searchCatalog(query,pageNumber) : any{
    return this.http.get<any>('http://openlibrary.org/search.json?q=' + query +'&page=' + pageNumber);
  }

  /* addToFavoritesArticles function will add article/book to the favArticles array. It will hold all favorite article. */
  addToFavoritesArticles(favarticle) {
    this.favArticles.push(favarticle);
  }

  /* getFavoritesArticles function will get all favorite articles/books */
  getFavoritesArticles(): article[] {
    return this.favArticles;
  }

  /* removeFromFavoritesArticles function will remove article/book from favorite articles array. */
  removeFromFavoritesArticles(favarticle):article[] {
    _.remove(this.favArticles, function (e) {
        return _.isEqual(e,favarticle);
    });
    return this.favArticles;
  }
} 
interface article {
  title: string;
  author: string;
  publishdate: string;
}

