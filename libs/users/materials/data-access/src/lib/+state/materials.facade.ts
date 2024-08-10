import { Injectable, inject } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as MaterialsAction from './materials.actions';
import * as MaterialsSelectors from './materials.selectors';
import { IFolder } from "../model/folders.model";


@Injectable({ providedIn: 'root' })
export class MaterialsFacade {
  private readonly store = inject(Store);

  public folderStatus$ = this.store.pipe(select(MaterialsSelectors.selectFoldersStatus));
  public allFolders$ = this.store.pipe(select(MaterialsSelectors.selectAllFolders));
  public foldersEntities$ = this.store.pipe(select(MaterialsSelectors.selectFoldersEntities));
  public openFolder$ = this.store.pipe(select(MaterialsSelectors.selectOpenedFolder));


  loadFolders() {
    this.store.dispatch(MaterialsAction.loadFolders())
  }
  deleteFolder(id:number) {
    this.store.dispatch(MaterialsAction.deleteFolder({ id }))
   console.log("folders facade delete")
  }

  addFolder(folderData: IFolder) {
    this.store.dispatch(MaterialsAction.addFolder({folderData}))
  }
 }