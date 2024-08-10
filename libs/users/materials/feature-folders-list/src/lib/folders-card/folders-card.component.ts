import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IFolder } from '@users/materials/data-access';

@Component({
  selector: 'users-folders-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, DatePipe],
  templateUrl: './folders-card.component.html',
  styleUrls: ['./folders-card.component.scss'],
})
export class FoldersCardComponent {
  @Input({ required: true}) folder!: IFolder

  @Output() deleteFolder = new EventEmitter();

  public transformDate (timestamp: number): Date {
    return new Date(timestamp)
  }

  onDeleteFolder() {
    this.deleteFolder.emit()
    console.log('delete folder card')
  }
}
