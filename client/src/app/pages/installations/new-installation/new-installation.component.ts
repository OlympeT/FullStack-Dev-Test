import { Component, OnInit } from '@angular/core';
import { Installation } from '../models/Installation';
import { InstallationsService } from '../services/Installations.service';
import { Panel } from '../models/Panel';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-installation',
  templateUrl: './new-installation.component.html',
  styleUrls: ['./new-installation.component.scss']
})
export class NewInstallationComponent implements OnInit {

  installation: Installation = new Installation();
  panel : Panel[]=[]

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private installationsService: InstallationsService,
    private router: Router) { 
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.installationsService.getPanels()
    .pipe(takeUntil(this._unsubscribeAll)).subscribe(panel => {
      this.panel = panel
    })
  }

  submitForm() {
    // Handle form submission
    console.log(this.installation);
    // post the new installation
    this.installationsService.postInstallation(this.installation)
    .pipe(takeUntil(this._unsubscribeAll)).subscribe(result => {
      this.router.navigate(['/installations']);
    })
  }

   /**
   * On destroy
   */
   ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
