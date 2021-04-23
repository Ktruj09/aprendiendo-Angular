import {Injectable} from '@angular/core';

/**
 * El HttpCliente, servira para hacer peticiones al Backend
 */
import {HttpClient, HttpHeaders} from '@angular/common/http';

/**
 * El observable es el que nos devolvera los datos que nos devolvera el API
 */
import {Observable} from 'rxjs';

import {Article} from '../models/article';
import {Global} from './global';
import { rendererTypeName } from '@angular/compiler';

@Injectable()
export class ArticleService{

    public url: String; 
    constructor(
        //Importante el HttpCliente cargarlo en app.module.ts
        //import { HttpClientModule} from "@angular/common/http";, y luego colocarlo en imports, que es donde estan nuestros modulos

        private _http: HttpClient

    ){
        this.url = Global.url;
    }

    pruebas(){
        return 'Soy el Servicio de Articulos.'
    }

    getArticles(last: any = null): Observable <any>{

        var articles= 'articles';

        if(last != null){
             articles = 'articles/true';
        }

        /**
         * el articles esl para las peticiones a nuestro 
         * Backend esto se veria de lo siguiente forma 
         * http://localhost:3001/api/articles
         */
        return this._http.get(this.url+articles)
    }

    //en esta parte nos servira para mostar el articulo al momento de dar clic
    //en Leer mas, nos llevara al articulo en especifico. 
    getArticle(articleid): Observable<any>{

        return this._http.get(this.url+ 'article/'+articleid);
    }//end getArticleid

    search(searchString):Observable<any>{

        /**
         * es importante revisar nuestro Backend en las rutas 
         * para el metodo buscar, en este caso en la ruta que esta en nuestro backend
         * aparece como 'search/'
         * 
         * searchString es la variable para mostrar en nuestro Frontend
         */
        return this._http.get(this.url+'search/'+searchString)
    }

    create(article):Observable<any>{

        //lo convertiremos a JSON, para poder hacer el envio mediante http
        let params = JSON.stringify(article)

        let hearders = new HttpHeaders().set('Content-Type', 'application/json');

        
        //llamada a nuestro backend.
        return this._http.post(this.url+'save', params, {headers: hearders});
    }

    //metodo que nos servira para la actualización.
    update(id, article):Observable<any>{

        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        
        //llamada a nuestro backend.
        return this._http.put(this.url+'article/'+id, params, {headers: headers});
    }//end update


    delete(id):Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        //llamada a nuestro backend.
        return this._http.delete(this.url+'article/'+id, {headers: headers})
    }
}
