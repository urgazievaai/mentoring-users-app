export interface IMaterials {
  title: string,
  material_link: string,
  folder_id: number,
  created_at: number
}

export interface AddMaterials {
  title: string,
  folder_id?: number,
  material_link: string
}

