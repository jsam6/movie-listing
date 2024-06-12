import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
})
export class MovieViewComponent {
    constructor(public router: Router, private movieService: MovieService, private route: ActivatedRoute) {}

    item: Movie|null = null

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.getDetail(params['id'])
            }
        })
    }
    
    async getDetail(movieId:string) {
        this.item = await this.movieService.getById(movieId)
        console.log(this.item, movieId)
    }
}
