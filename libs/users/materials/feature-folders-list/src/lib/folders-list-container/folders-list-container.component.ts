import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFolder, MaterialsFacade } from '@users/materials/data-access';
import { Router } from '@angular/router';
import { FolderListComponent } from '../folder-list/folder-list.component';

@Component({
  selector: 'users-folders-list-container',
  standalone: true,
  imports: [CommonModule, FolderListComponent],
  templateUrl: './folders-list-container.component.html',
  styleUrls: ['./folders-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListContainerComponent {
  public materialsFacade = inject(MaterialsFacade);
  private readonly router = inject(Router);

  public readonly allFolders$ = this.materialsFacade.allFolders$;
  private readonly folderStatus$ = this.materialsFacade.folderStatus$;

  constructor() {
    this.materialsFacade.loadFolders();
  }

  
 }
