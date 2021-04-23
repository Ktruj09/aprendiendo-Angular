import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global'
import {AlertService} from '../../services/alertas.service';


@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService],
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url : string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-imagen'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen..',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {

    this.article = new Article('', '', '', null, null);
    this.is_edit = true;
    this.page_title = 'Editar Articulo';
    this.url = Global.url;
   
  }
  ngOnInit() {
    //en esta parte llamaos el metodo para que se llene la parte de 
    //new Article('', '', '', null, null);, es por ello que llamaremos la clase getArticle()

    this.getArticle();
  }

  onSubmit() {

    this._articleService.update(this.article._id, this.article).subscribe(

      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          //nos lleva a la pagina de blog
          //this._router.navigate(['blog/articulo', this.article._id])
          //this._router.navigate(['/blog/articulo', this.article._id]);
          this._router.navigate(['/blog/articulo', this.article._id]);
          
        }else{
          this.status = 'error';
        }

      },
      err => {
        console.log(err);
        this.status = 'error';
      }

    );

  }
  imageUpload(data) {

    this.article.image = data.body.image;

  }//end imageUpload

  getArticle() {

    //esto nos sacara un articulo en concreto de MongoDB
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(

        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        err => {
          console.error(err);
          this._router.navigate(['/home']);
        }
      )

    })
  }

}
