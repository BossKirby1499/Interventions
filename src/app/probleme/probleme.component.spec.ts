import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //  it('should create', () => {
  //    expect(component).toBeTruthy();
  //  });

   it('Zone PRÉNOM doit comporter au moins 3 caractères',() =>{
    let zone = component.problemeForm.controls['Prenom']
    zone.setValue('a'.repeat(3));
     expect(zone.valid).toBeTruthy();
   });

   it('Zone PRÉNOM invalide avec 2 caractères',() =>{
    let errors = {};
    let zone = component.problemeForm.controls['Prenom']
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
     expect(errors['minlength']).toBeTruthy();
   });

   it('Zone PRÉNOM est valide avec 200 caractères',() =>{
    let zone = component.problemeForm.controls['Prenom']
    zone.setValue('a'.repeat(200));
     expect(zone.valid).toBeTruthy();
   });

   it('Zone PRÉNOM invalide avec aucune valeur',() =>{
    let errors = {};
    let zone = component.problemeForm.controls['Prenom']
    zone.setValue('a'.repeat(0));
    errors = zone.errors || {};
     expect(errors['minlength']).toBeFalsy();
   });

   it('Zone PRÉNOM est valide avec 10 espaces',() =>{// À changer durant le prochain travail
    let zone = component.problemeForm.controls['Prenom']
    zone.setValue(' '.repeat(10));
     expect(zone.valid).toBeTruthy();
   });

   it('Zone PRÉNOM est valide avec 2 espaces et 1 caractère',() =>{// À changer durant le prochain travail
    let zone = component.problemeForm.controls['Prenom']
    zone.setValue(' '.repeat(2)+'a');
     expect(zone.valid).toBeTruthy();
   });



});
