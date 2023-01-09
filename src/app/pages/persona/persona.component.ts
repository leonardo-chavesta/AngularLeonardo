import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  private readonly router = inject(ActivatedRoute)
  public persona = null
  public descripciont = null
  public imagen = null
  public personas : any[] = []
  ngOnInit() {
    this.router.data.subscribe(({ myData }) => {
      console.log(myData.results);
      this.persona = myData.results[0]?.name;
      this.descripciont = myData.results[0]?.location?.name;
      this.imagen = myData.results[0]?.image;
      this.personas = myData.results
      
    })
  }

}
