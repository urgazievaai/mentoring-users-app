import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFolder, MaterialsFacade } from '@users/materials/data-access';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { FolderListComponent } from '../folder-list/folder-list.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreUiConfirmDialogComponent } from '@users/core/ui';
import { FoldersAddButtonComponent } from '@materials/feature-folders-create'

@Component({
  selector: 'users-folders-list-container',
  standalone: true,
  imports: [CommonModule, FolderListComponent, FoldersAddButtonComponent],
  templateUrl: './folders-list-container.component.html',
  styleUrls: ['./folders-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListContainerComponent {
  private readonly router = inject(Router);

  public materialsFacade = inject(MaterialsFacade);
  private readonly folderStatus$ = this.materialsFacade.folderStatus$;
  public readonly dialog = inject(MatDialog);
  public readonly allFolders$ = this.materialsFacade.allFolders$;

  constructor() {
    this.materialsFacade.loadFolders();
  }

  public deleteFolder(folder: IFolder): void {
    const dialogRef: MatDialogRef<CoreUiConfirmDialogComponent> = this.dialog.open(CoreUiConfirmDialogComponent, {
      data: { dialogText: `Удалить папку ${folder.title}?` },
    });
    dialogRef.afterClosed().pipe(
      tap((result: boolean) => {
        if(result) this.materialsFacade.deleteFolder(folder.id)
      console.log('delete folder')
      })
    ).subscribe()
  }
}
