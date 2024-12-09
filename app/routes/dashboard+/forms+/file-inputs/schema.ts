import { z } from 'zod'

const allowedImageTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/gif'
]

export const inputSchema = z.object({
  singleFile: z
    .custom<FileList>(
      (value) => value instanceof FileList && value.length > 0,
      {
        message: 'A file is required.'
      }
    )
    .refine((files) => allowedImageTypes.includes(files[0]?.type || ''), {
      message: 'Only PNG, JPEG, or WEBP files are allowed.'
    })
    .refine((files) => files[0]?.size <= 5 * 1024 * 1024, {
      message: 'File size must be less than 5MB.'
    }),
  multipleFiles: z
    .custom<FileList>(
      (value) => value instanceof FileList && value.length > 0,
      {
        message: 'At least one file is required.'
      }
    )
    .refine(
      (files) => {
        const invalidFiles = Array.from(files).filter(
          (file) => !allowedImageTypes.includes(file.type)
        )
        return invalidFiles.length === 0
      },
      {
        message: 'All files must be PNG, JPEG, or WEBP.'
      }
    )
    .refine(
      (files) => {
        const oversizedFiles = Array.from(files).filter(
          (file) => file.size > 5 * 1024 * 1024
        )
        return oversizedFiles.length === 0
      },
      {
        message: 'Each file must be less than 5MB.'
      }
    ),
  dragAndDrop: z
    .custom<FileList>(
      (value) => value instanceof FileList && value.length > 0,
      {
        message: 'At least one file is required.'
      }
    )
    .refine(
      (files) => {
        const invalidFiles = Array.from(files).filter(
          (file) => !allowedImageTypes.includes(file.type)
        )
        return invalidFiles.length === 0
      },
      {
        message: 'All files must be PNG, JPEG, or WEBP.'
      }
    )
    .refine(
      (files) => {
        const oversizedFiles = Array.from(files).filter(
          (file) => file.size > 5 * 1024 * 1024
        )
        return oversizedFiles.length === 0
      },
      {
        message: 'Each file must be less than 5MB.'
      }
    ),
  disabledFile: z
    .custom<File>((value) => value instanceof File) // Ensure it's a File object
    .refine((file) => file.type === 'image/png', {
      message: 'Only PNG files are allowed.'
    })
    .or(z.undefined())
})

export type FileInputForm = z.infer<typeof inputSchema>
