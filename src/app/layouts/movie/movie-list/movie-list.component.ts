import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { movieData } from 'src/data/movie-data';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
    notesList : any[] = []
    searchTerm: string = ''
    fullList = this.notesList
    constructor(public router: Router, private movieService: MovieService) {}

    
    ngOnInit() {
        this.getList()
    }

    async getList() {
        this.notesList = await this.movieService.getList()
        this.fullList = this.notesList
    }

    searchMovies() {
        if (this.searchTerm) {
            this.notesList = this.movieService.searchByName(this.searchTerm)
        } else {
            this.notesList = this.fullList
        }
    }
}
