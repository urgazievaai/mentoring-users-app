import { Injectable, inject } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as MaterialsAction from './materials.actions';
import * as MaterialsSelectors from './materials.selectors';


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
 }