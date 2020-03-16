// This is component file for managing favorites.
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-favoritepage',
  templateUrl: './favoritepage.component.html',
  styleUrls: ['./favoritepage.component.scss']
})
export class FavoritepageComponent implements OnInit {
  favArticles={'data':[]};
  
  // displayedColumns will define which columns we need to display in material table.
  displayedColumns: string[] = ['title','author','publishdate',"actions"];
  
  // Constructor will create instance of DataService.
  constructor(private dataService: DataService ) { }

  // On init, it will assign with all the favorite article/book retrived from data service.
  ngOnInit(): void {
    this.favArticles=new MatTableDataSource<article>(this.dataService.getFavoritesArticles());
  }

  // removeFromFavorites function will call data service function to remove from favorite articles managed in data service.
  removeFromFavorites(element) {
    var favs =this.dataService.removeFromFavoritesArticles(element);
    
    // After retriving from data service, it will be converted in MatTableDataSource object.
    this.favArticles=new MatTableDataSource<article>(favs);
  }

}
interface article {
  title: string;
  author: string;
  publishdate: string;
}