declare module '@payloadcms/plugin-form-builder/types' {
  export interface HiddenField {
    blockName?: string
    blockType: 'hidden'
    defaultValue?: string
    label?: string
    name: string
    required?: boolean
    width?: number
  }

  export interface FieldsConfig {
    hidden?: boolean | FieldConfig
  }
}

declare module '@payloadcms/plugin-form-builder/dist/exports/types' {
  export interface HiddenField {
    blockName?: string
    blockType: 'hidden'
    defaultValue?: string
    label?: string
    name: string
    required?: boolean
    width?: number
  }

  export interface FieldsConfig {
    hidden?: boolean | FieldConfig
  }
}
