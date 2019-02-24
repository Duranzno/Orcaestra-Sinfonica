import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: []
})
export class FileComponent implements OnInit {
  @ViewChild('file') file: ElementRef;
  public files: Set<File> = new Set();

  constructor() { }
  ngOnInit() { }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (const key in files) {
      if (!isNaN(parseInt(key, 2))) {
        this.files.add(files[key]);

      }
    }
    console.log(files, this.files);
  }
  // closeDialog() {
  //   if (this.uploadSuccessful) {return this.dialogRef.close()}    // if everything was uploaded already, just close the dialog
  //   this.uploading = true;    // set the component state to "uploading"

  //   // start the upload and save the progress map
  //   console.log(this.progress);

  //   for (const key in this.progress) {
  //     this.progress[key].progress.subscribe(val => console.log(val));
  //   }

  //   // convert the progress map into an array
  //   let allProgressObservables = [];
  //   for (let key in this.progress) {
  //     allProgressObservables.push(this.progress[key].progress);
  //   }

  //   // Adjust the state variables

  //   // The OK-button should have the text "Finish" now
  //   this.primaryButtonText = 'Finish';

  //   // The dialog should not be closed while uploading
  //   this.canBeClosed = false;
  //   this.dialogRef.disableClose = true;

  //   // Hide the cancel-button
  //   this.showCancelButton = false;

  //   // When all progress-observables are completed...
  //   forkJoin(allProgressObservables).subscribe(end => {
  //     // ... the dialog can be closed again...
  //     this.canBeClosed = true;
  //     this.dialogRef.disableClose = false;

  //     // ... the upload was successful...
  //     this.uploadSuccessful = true;

  //     // ... and the component is no longer uploading
  //     this.uploading = false;
  //   });
  // }
}
