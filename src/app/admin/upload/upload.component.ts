import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { PersonaTipo, UploadFile, Score } from '../../core/models';
import { OrcaState, From } from 'src/app/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: []
})

export class UploadComponent implements OnInit {
  public form: FormGroup;
  personas: string[] = Object.values(PersonaTipo);
  generosTodos = ['Barroco', 'Clasico', 'Alma Llanera'];
  @ViewChild('generoInput') generoInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  chipInputCtrl = new FormControl();
  files: UploadFile[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private _fb: FormBuilder, private store: Store<OrcaState>) { }

  ngOnInit() {
    this.form = this._fb.group({
      obra: [''],
      its: [''],
      gente: this._fb.array([
        this.initPersona(),
      ]),
      generos: this._fb.array([
      ]),
      almacenamiento: this._fb.array([
        this.initAlmacenamiento(),
      ]),
      extrainfo: [''],
      youtube: [''],
    });
  }
  initPersona() {
    return this._fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: [''],
      tipo: ['']
    });
  }
  show(files: UploadFile[]) { console.log('admin/upload', files); this.files = files; }
  get gente() { return this.form.get('gente') as FormArray; }
  addPersona() { this.gente.push(this.initPersona()); }
  removePersona(i: number) { this.gente.removeAt(i); }

  initGenero() {
    return this._fb.group({
      nombre: [''],
    });
  }
  get generos() { return this.form.get('generos') as FormArray; }
  addGenero() { this.generos.push(this.initGenero()); }
  removeGenero(i: number) { this.generos.removeAt(i); }
  selectedGenero(event: MatAutocompleteSelectedEvent): void {
    this.addGeneroEvent(event.option.viewValue);
    this.generoInput.nativeElement.value = '';
    // this.genCtrl.setValue(null);
  }
  private addGeneroEvent(value: string) {
    const index = this.generos.value.findIndex((e: string) => e.trim() === value.trim());

    if (index === -1) {
      this.generos.value.push(value.trim());
    }
  }
  addChip(event: MatChipInputEvent): void {
    // if (!this.matAutocomplete.isOpen) {
    console.log(this.generos);
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) { this.addGeneroEvent(value); }
    if (input) { input.value = ''; }
    // this.genCtrl.setValue(null);
    // }
  }
  removeChip(genero: string): void {
    const index = this.generos.value.indexOf(genero);
    if (index >= 0) {
      this.generos.value.splice(index, 1);
    }
  }

  initAlmacenamiento() {
    return this._fb.group({
      cantidad: [''],
      tipo: [''],
    });
  }
  get almacenamiento() { return this.form.get('almacenamiento') as FormArray; }
  addAlmacenamiento() { this.almacenamiento.push(this.initAlmacenamiento()); }
  removeAlmacenamiento(i: number) { this.almacenamiento.removeAt(i); }

  onSave() {
    console.log(this.form.value);
    const score = this.form.value as Score;
    this.store.dispatch(new From.media.PostScoreMediaFb({ files: this.files, score }));
  }
  onSubmit() {
    alert('Hey listen');
  }
}
