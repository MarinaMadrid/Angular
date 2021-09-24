import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService, private router:Router ) {
    console.log("Constructor aparece antes que ngOnInit")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
  }

}
