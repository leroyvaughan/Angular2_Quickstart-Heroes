import { Component, OnInit }	from '@angular/core';
import { Router }				from '@angular/router';
import { Observable }			from 'rxjs/Observable';
import { Subject }				from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';


@Component({
	moduleId: module.id,
	selector: 'hero-search',
	templateUrl: 'hero-search.component.html',
	styleUrls: [ 'hero-search.component.css' ],
	providers: [ HeroSearchService ],
})
export class HeroSearchComponent implements OnInit{
	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();


	constructor(
		private heroSearchService: HeroSearchService,
		private router: Router
	){}

	//Push a search term into the observable stream.
	search(term: string): void {
		console.log(term);
		this.searchTerms.next(term);
	}

	ngOnInit(): void{
		this.heroes = this.searchTerms
			.debounceTime(300)	//300ms pause in events
			.distinctUntilChanged()	//ignore repeats

			//switch to new obsv each time
			.switchMap(term => term	
				//return the http search obsv
				? this.heroSearchService.search(term)
				
				//or the obsv of empty heroes in ""
				: Observable.of<Hero[]>([]))
				.catch(error => {
					//TODO: 
					console.log(error);
					return Observable.of<Hero[]>([]);
				});
	}

	gotoDetail(hero: Hero): void{
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}



}


