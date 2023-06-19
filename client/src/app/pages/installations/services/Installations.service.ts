import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Panel } from '../models/Panel';
import { environment } from 'src/environments/environment';
import { Installation } from '../models/Installation';

@Injectable({
  providedIn: 'root'
})
export class InstallationsService {

constructor(private _http: HttpClient) { }

/**
   * Get all panels
   */
getPanels() {
  return this._http.get<Panel[]>(`${environment.apiBase}/panels`);
}

/**
   * Get all Installations
  */
getInstallations() {
  return this._http.get<Installation[]>(`${environment.apiBase}/system_installations`);
}

/**
   * Create a Installation
  */
postInstallation(system_installation:Installation) {
  return this._http.post(`${environment.apiBase}/system_installations`,{system_installation});
}

}
