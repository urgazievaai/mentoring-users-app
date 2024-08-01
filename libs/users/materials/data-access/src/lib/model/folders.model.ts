export interface IFolder {
  folders_id: number,
  title: string,
  created_at: number
}

export interface AddFolder {
  folder_id: number,
  title: string
  material_id?: number
}