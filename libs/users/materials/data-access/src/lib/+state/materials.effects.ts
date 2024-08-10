import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MaterialsActions from './materials.actions';
import { ApiService } from '@users/core/http';
import { AddFolder, IFolder } from '../model/folders.model';

export const loadFolders = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MaterialsActions.loadFolders),
      switchMap(() =>
        apiService.get<IFolder[]>('/folder').pipe(
          map((folders) => MaterialsActions.loadFoldersSuccess({ folders })),
          catchError((error) => {
            console.log('Error from API:', error);
            return of(MaterialsActions.loadFoldersFailure({ error }));
          })
        )
      )
    );
  },
  { functional: true }
);

export const deleteFolder = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MaterialsActions.deleteFolder),
      switchMap(({ id }) =>
        apiService.delete<void>(`/folder/${id}`).pipe(
          map(() => MaterialsActions.deleteFolderSuccess({ id })),
          catchError((error) => {
            console.log('Error', error);
            return of(MaterialsActions.deleteFolderFailed({ error }));
          })
        )
      )
    );
  },
  { functional: true }
);

export const addFolder = createEffect(
  () => {
  const actions$ = inject(Actions);
  const apiService = inject(ApiService);

  return actions$.pipe(
      ofType(MaterialsActions.addFolder),
      //folderData значение полученное от actions, значение после стрелочной функции новый внутренний поток(Observable)
      switchMap(({ folderData }) =>
        apiService.post<IFolder, AddFolder>(`/folder`, folderData).pipe(
          //В данном случае map преобразует ответ от API (объект типа IFolder) в новый экшен. map((response: IFolder) => MaterialsActions.addFolderSuccess({ folderData: response }))
          map((IFolder) => MaterialsActions.addFolderSuccess({ folderData: IFolder })),
          catchError((error) => 
            of(MaterialsActions.addFolderFailed({ error })))
        )
      )
    )
}, 
{functional: true}
);
