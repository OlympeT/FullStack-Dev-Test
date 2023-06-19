import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Panel } from '../models/Panel';
import { Installation } from '../models/Installation';
import { InstallationsService } from './Installations.service';
import { environment } from 'src/environments/environment';

describe('InstallationsService', () => {
  let service: InstallationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InstallationsService]
    });
    service = TestBed.inject(InstallationsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPanels', () => {
    it('should retrieve panels', () => {
      const mockPanels: Panel[] = [
        { panel_code: 'ASDVE4', panel_type: 'photovoltaic', id:1 },
      { panel_code: 'SDFREH', panel_type: 'hybrid',  id:2 }
      ];

      service.getPanels().subscribe(panels => {
        expect(panels).toEqual(mockPanels);
      });

      const request = httpMock.expectOne(`${environment.apiBase}/panel`);
      expect(request.request.method).toBe('GET');
      request.flush(mockPanels);
    });
  });

  describe('getInstallations', () => {
    it('should retrieve installations', () => {
      const mockInstallations: Installation[] = [
        // Mock installation objects
      ];

      service.getInstallations().subscribe(installations => {
        expect(installations).toEqual(mockInstallations);
      });

      const request = httpMock.expectOne(`${environment.apiBase}/system_installations`);
      expect(request.request.method).toBe('GET');
      request.flush(mockInstallations);
    });
  });

  describe('postInstallation', () => {
    it('should create a new installation', () => {
      const mockInstallation: Installation = {
        company_name: '',
        company_siren: '',
        customer_name: '',
        customer_email: '',
        customer_telephone: '',
        installation_address: '',
        installation_date: '2023-06-19',
        number_of_panels: 0,
        panel_id: 1
      };

      service.postInstallation(mockInstallation).subscribe(response => {
        expect(response).toBeTruthy();
      });

      const request = httpMock.expectOne(`${environment.apiBase}/system_installations`);
      expect(request.request.method).toBe('POST');
      expect(request.request.body).toEqual({ installation: mockInstallation });
      request.flush({});
    });
  });
});
