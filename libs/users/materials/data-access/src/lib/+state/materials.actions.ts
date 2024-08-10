import { createAction, props } from '@ngrx/store';
import { IFolder } from '../model/folders.model';

export const loadFolders = createAction ('[Materials Page] Load Folders');
export const loadFoldersSuccess = createAction ('[Materials Page] Load Folders Success', props<{folders: IFolder[]}>());
export const loadFoldersFailure = createAction ('[Materials Page] Load Folders Failure', props<{error: any}>())

export const deleteFolder = createAction('[Materials Page] Delete Folders', props<{id: number}>());
export const deleteFolderSuccess = createAction('[Materials Page] Delete Folders Success', props<{id: number}>());
export const deleteFolderFailed = createAction('[Materials Page] Delete Folders Failed', props<{error: any}>());

export const addFolder = createAction('[Materials Page] Add Folders', props<{folderData: IFolder}>());
export const addFolderSuccess = createAction('[Materials Page] Add Folders Success', props<{folderData: IFolder}>());
export const addFolderFailed = createAction('[Materials Page] Add Folders Failed', props<{error: any}>());