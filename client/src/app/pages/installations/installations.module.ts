import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationsComponent } from './installations.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewInstallationComponent } from './new-installation/new-installation.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


const routes: Routes = [
  {
    path: 'installations',
    component: InstallationsComponent,
  },
  {
    path: 'installations/new',
    component: NewInstallationComponent,
  }

]
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
  
  ],
  declarations: [InstallationsComponent,NewInstallationComponent]
})
export class InstallationsModule { }
