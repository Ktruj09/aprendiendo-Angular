//Importamos los Modulos
/**
 * ModuleWithProviders nos ayuda a crear un modulo para nuestras rutas.
 */
import {ModuleWithProviders} from '@angular/core';

//esto nos va a permitir crear las clases para generar objetos de rutas
import {Routes, RouterModule} from '@angular/router';

//importamos componentes, los cuales se le hara una pagina exclusiva. 
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {ArticleComponent} from './components/article/article.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {PeliculasComponent}  from './components/peliculas/peliculas.component';
import {PaginaComponent } from './components/pagina/pagina.component';
import {ErrorComponent} from './components/error/error.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import {ArticleEditComponent } from './components/article-edit/article-edit.component'


//Definimos array de rutas
const appRoutes: Routes= [

    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre/:apellido/:edad', component: PaginaComponent},
    {path: '**', component: ErrorComponent},

];

//exportamos el modulo de rutas
export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);