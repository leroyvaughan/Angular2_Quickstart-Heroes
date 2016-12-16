import './rxjs-extensions';
import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule } 		from '@angular/forms';
import { HttpModule } 		from '@angular/http';

import { AppRoutingModule }		from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } 	from './shared/in-memory-data.service';

import { AppComponent }  		from './app.component';
import { DashboardComponent } 	from './components/dashboard/dashboard.component';
import { HeroDetailComponent } 	from './components/hero/hero-detail.component';
import { HeroesComponent } 		from './components/heroes/heroes.component';
import { HeroService } 			from './components/hero/hero.service';
import { HeroSearchComponent }	from './components/hero/hero-search.component';



@NgModule({
	imports: [
		BrowserModule, 
		FormsModule, 
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroesComponent,
		HeroSearchComponent,
	],
	providers: [ HeroService ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
