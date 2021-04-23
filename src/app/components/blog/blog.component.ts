import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/models/article';
import {Global} from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService],
})
export class BlogComponent implements OnInit {

  public articles: Article[]
  //esto nos servira para poder hacer las peticiones y extraer imagenes del  Backend 
  
  public url:string;
  constructor(

    private _articleService: ArticleService

  ) {
    this.url = Global.url;
  }

  ngOnInit() {

    /**
     * subscribe nos permite devolver los datos 
     */
    this._articleService.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        } else {
          console.error('Error al cargar los datos.')
        }
      },
      err => {
        console.error(err);
      }

    );
  }

}
