import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonaTipo } from '@core/models/autor.interface';
@Component({
  selector: 'app-involucrados',
  styleUrls: [],
  template: `
  <div [formGroup]="form">  <!-- Nombre de la Persona Involucrada -->
  <mat-form-field>
    <input matInput placeholder="Nombre" id="nombre" type="text" formControlName="nombre">
    <mat-error *ngIf="form.controls['nombre'].valid">Se necesita el nombre.</mat-error>
  </mat-form-field>
    <!-- Apellido de la Persona Involucrada  -->
  <mat-form-field>
    <input matInput placeholder="Apellido" id="apellido" type="text" formControlName="apellido">
  </mat-form-field>
  <!-- Tipo de Persona -->
  <mat-form-field>
    <mat-select placeholder="Tipo de Persona Involucrada" formControlName="tipo">
      <mat-option *ngFor="let p of personas" [value]="p">
        {{p}}
      </mat-option>
    </mat-select>
  </mat-form-field>
</div>
  `
})
export class InvolucradosComponent {
  @Input('form') public form: FormGroup;
  personas: string[] = Object.values(PersonaTipo);
}