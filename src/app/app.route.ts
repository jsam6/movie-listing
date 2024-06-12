import { Routes } from '@angular/router';

// dashboard
import { IndexComponent } from './index';
import { AppLayout } from './layouts/app-layout';
import { MovieListComponent } from './layouts/movie/movie-list/movie-list.component';
import { MovieViewComponent } from './layouts/movie/movie-view/movie-view.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: IndexComponent, title: 'Movie Listing' },
            { path: 'movie', component: MovieListComponent},
            { path: 'movie/:id', component: MovieViewComponent},
        ],
    }
];
