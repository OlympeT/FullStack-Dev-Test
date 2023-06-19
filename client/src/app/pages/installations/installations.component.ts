import { Installation } from './models/Installation';
import { Component, OnInit } from '@angular/core';
import { InstallationsService } from './services/Installations.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Panel } from './models/Panel';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.scss']
})
export class InstallationsComponent implements OnInit {
  // Private
  private _unsubscribeAll: Subject<any>;
  installation : Installation[] =[];
  panel : Panel[]=[]

  constructor(private installationsService: InstallationsService) {
    this._unsubscribeAll = new Subject();
   }

  ngOnInit() {
    this.installationsService.getInstallations()
    .pipe(takeUntil(this._unsubscribeAll)).subscribe(installation => {
      this.installation = installation;
    })

    this.installationsService.getPanels()
    .pipe(takeUntil(this._unsubscribeAll)).subscribe(panel => {
      this.panel = panel
    })
  }

  _panelType(id:number){
    return this.panel.find(x => x.id === id)?.panel_type
  }

}
