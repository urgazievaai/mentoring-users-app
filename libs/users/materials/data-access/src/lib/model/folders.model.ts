export interface IFolder {
  id: number,
  title: string,
  created_at: number
}

export interface AddFolder {
  id: number,
  title: string
  material_id?: number
}