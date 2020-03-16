/* this component will help and paginate search result table. */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../data.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {
  result={'data':[]};
  searchQuery: string;
  totalArticleFound: number=0;
  favArticles: article[] = [];
  
  // Configure which columns to display in search result.
  displayedColumns: string[] = ['title','author','publishdate',"actions"];

  /* onPageNumberChange function will handle select page drop down change event. */
  onPageNumberChange(event) {
    this.searchCatalog(this.searchQuery,event.value);
  }

  /* createRange function will help in select options creation. */
  createRange(): number[]{
    var items: number[] = [];
    for(var i = 1; i <= this.totalArticleFound/100; i++){
       items.push(i);
    }
    return items;
  }

  constructor(private dataService: DataService) {}
  
  /* addToFavorites function will add the article by calling data service which will handle all the favorite articles/books list. */
  addToFavorites(favarticle) {
    this.dataService.addToFavoritesArticles(favarticle);
  }

  /* senitizeResponse will generate and senitize response and format it will the fields we need. */
  senitizeResponse(data): article[] {
    var senitizedData=[];
    data.forEach(function(item){
      senitizedData.push(<article>({title:item.title,author:(item.author_name)? item.author_name.join(", "):'',publishdate:(item.publish_date)? item.publish_date.join(", "):''}));
    });
    return senitizedData;
  }

  /* searchCatalog method will search and create competible result for material angular table. */
  searchCatalog(searchQuery,pageNumber) {
    this.dataService.searchCatalog(searchQuery,pageNumber).subscribe(
          data => {
            this.totalArticleFound=data.numFound;
            var senitizedData= this.senitizeResponse(data.docs);
            this.result = new MatTableDataSource<article>(senitizedData);
          },
          error => console.error('There was an error!', error)
      )
  }
  ngOnInit(): void {
  }

}
interface article {
  title: string;
  author: string;
  publishdate: string;
}
