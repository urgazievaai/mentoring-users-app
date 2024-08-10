import { createFeature, createReducer, on } from '@ngrx/store';
import * as MaterialsActions from './materials.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { IFolder } from '../model/folders.model';
import { LoadingStatus } from '@users/core/data-access';
import { IMaterials } from '../model/materials.model';

export const MATERIALS_FEATURE_KEY = 'materials';

export interface MaterialsState extends EntityState<IFolder> {
  materials: IMaterials[];
  status: LoadingStatus;
}

export const materialsAdapter: EntityAdapter<IFolder> = createEntityAdapter<IFolder>();

export const initialMaterialsState: MaterialsState = materialsAdapter.getInitialState({
  materials: [],
  status: 'init',
});

export const materialsFeature = createFeature({
  name: 'materials',
  reducer: createReducer(
    initialMaterialsState,

    on(MaterialsActions.loadFolders, (state) => ({
      ...state,
      status: 'loading' as const,
    })),
    on(MaterialsActions.loadFoldersSuccess, (state, { folders }) =>
      materialsAdapter.setAll(folders, { ...state, status: 'loaded' as const })
    ),

    on(MaterialsActions.loadFoldersFailure, (state, { error }) => ({
      ...state,
      status: 'error' as const,
      error,
    })),

    on(MaterialsActions.deleteFolder, (state) => ({
      ...state,
      status: 'loading' as const,
    })),
    on(MaterialsActions.deleteFolderSuccess, (state, { id }) =>
      materialsAdapter.removeOne(id, {
        ...state,
        status: 'loaded' as const,
      })
    ),
    on(MaterialsActions.addFolderSuccess, (state, {folderData}) => 
      materialsAdapter.addOne({...folderData}, {...state })),
)
});
