import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFolder} from '@users/materials/data-access';
import { FoldersCardComponent } from "../folders-card/folders-card.component";

@Component({
  selector: 'users-folder-list',
  standalone: true,
  imports: [CommonModule, FoldersCardComponent ],
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderListComponent {
  @Input({required: true}) 
  folders!: IFolder[];
  
  @Output() deleteFolder = new EventEmitter();
  @Output() openFolder = new EventEmitter();
  
  public onDeleteFolder(folder: IFolder) {
    this.deleteFolder.emit(folder);
    console.log('delete folder list')
  }

  public onOpenFolder(id: number) {
    this.openFolder.emit(id);
  }
}
