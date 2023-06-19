import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewInstallationComponent } from './new-installation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { InstallationsService } from '../services/Installations.service';
import { Installation } from '../models/Installation';

describe('NewInstallationComponent', () => {
  let component: NewInstallationComponent;
  let fixture: ComponentFixture<NewInstallationComponent>;
  let installationsService: InstallationsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewInstallationComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [InstallationsService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInstallationComponent);
    component = fixture.componentInstance;
    installationsService = TestBed.inject(InstallationsService);

    // Mock the getPanels method
    spyOn(installationsService, 'getPanels').and.returnValue(of([
      { panel_code: 'ASDVE4', panel_type: 'photovoltaic', id:1 },
      { panel_code: 'SDFREH', panel_type: 'hybrid',  id:2 }
    ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize panels', () => {
    expect(component.panel.length).toBe(2);
    expect(component.panel[0].panel_code).toBe('ASDVE4');
    expect(component.panel[1].panel_type).toBe('hybrid');
  });

  it('should submit form', () => {
    // Mock the postInstallation method
    spyOn(installationsService, 'postInstallation').and.returnValue(of({}));

    const installation: Installation = {
      company_name: 'Darty',
      company_siren: '123456789',
      customer_name: 'Franck Darty',
      customer_email: 'Franck@Darty',
      customer_telephone: '1234567890',
      installation_address: '123 Marseill',
      installation_date: '2023-06-19',
      number_of_panels: 1,
      panel_id: 1
    };

    component.installation = installation;
    component.submitForm();

    expect(installationsService.postInstallation).toHaveBeenCalledWith(installation);
  });
});
