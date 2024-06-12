import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Movie } from 'src/app/model/movie.model';
import { movieData } from 'src/data/movie-data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    private resourceUrl = 'movie';

    constructor() {}

    getList() {
        return movieData
    }

    getById(id: any): Movie|null {
        const movie = movieData.filter(movie => movie.id == id)
        if (movie.length == 0) return null
        return movie[0]
    }

    update(id: any, info: any): void {
    }

    create(info: any): void {
    }

    softDelete(deleteItem: any): void {
    }

    searchByName(name: string): Movie[] {
        return movieData.filter(movie =>  movie.name.toLowerCase().includes(name.toLowerCase()) )
    }

}
