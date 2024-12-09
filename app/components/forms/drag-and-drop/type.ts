import { DropzoneProps } from 'react-dropzone-esm'
import { FieldValues, Path } from 'react-hook-form'

export type DargAndDropProps<T extends FieldValues> = DropzoneProps & {
  name: Path<T>
}
