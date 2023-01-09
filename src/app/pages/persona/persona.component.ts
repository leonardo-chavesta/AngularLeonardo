import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  private readonly router = inject(ActivatedRoute)
  public personas : any[] = []
  // constructor(private dataSvs: DataService ){}
  ngOnInit() {
      this.router.data.subscribe(({ myData }) => {
      console.log(myData.results);
      this.personas = myData.results

      // console.log(this.dataSvs.getData())
      
    })
  }


}
