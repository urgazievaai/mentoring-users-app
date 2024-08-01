import { LoadingStatus } from "@users/core/data-access";
import { IFolder } from "@users/materials/data-access";
import { DeepReadonly } from "@users/core/utils";

export type FolderListVM = DeepReadonly <{
  folders: IFolder[],
  status: LoadingStatus
}>