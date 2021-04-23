import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {AlertService} from '../../services/alertas.service';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import {Global} from '../../services/global';
import Swal from 'sweetalert2'
 


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService, AlertService],
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public url: string;
  public is_edit: boolean;
  public page_title: string;
  public alerta:  AlertService;
 

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url +'upload-imagen'
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
    private _articleService: ArticleService,
    private alertas: AlertService
    
    
  ) {

    this.article = new Article('', '', '', null, null);
    this.page_title = "Crear Articulo"
    this.url = Global.url;
  }

  ngOnInit() {
    /**Llamando alerta que deseo ejecutar */
    this.alert()
   
  }

/**metodo o funcion de alerts para optimizar codigo */
alert(){
  /**Aca pones la alerta que queras usar */
  Swal.fire('Oops...', 'Que paso amiguito?!', 'success')
}

  onSubmit() {

    this._articleService.create(this.article).subscribe(

      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          
          this._router.navigate(['/blog'])

        }

      },
      err => {
        console.log(err);
        this.status = 'error';
      }

    );

  }
  imageUpload(data){
    
    this.article.image = data.body.image;

  }

}