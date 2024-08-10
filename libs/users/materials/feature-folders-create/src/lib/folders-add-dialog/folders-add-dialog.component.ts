import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'users-folders-add-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatInputModule, 
    MatButtonModule
  ],
  templateUrl: './folders-add-dialog.component.html',
  styleUrls: ['./folders-add-dialog.component.scss'],
})
export class FoldersAddDialogComponent {
  public addFolder: FormControl
  public dialogRef = inject(MatDialogRef<FoldersAddDialogComponent>)

  constructor(@Inject(MAT_DIALOG_DATA) public data: {addFolder: string} ) {
     this.addFolder = new FormControl(data.addFolder, Validators.required); 
  }

  cancel(): void {
    this.dialogRef.close()
  }

  save(): void {
    if(this.addFolder.valid) {
      const formData = this.addFolder.value
      this.dialogRef.close(formData)
    }
  }
}
