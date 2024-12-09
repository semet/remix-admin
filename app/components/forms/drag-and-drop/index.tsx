import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone-esm'
import { Controller, FieldError, get, useFormContext } from 'react-hook-form'
import { IoMdCloudUpload } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

import { DargAndDropProps } from './type'

type FileWithPreview = File & { preview: string }

export const DragAndDrop = <T extends Record<string, unknown>>(
  props: DargAndDropProps<T>
) => {
  const { name, maxFiles, multiple } = props
  const {
    control,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors }
  } = useFormContext()
  const { getRootProps, getInputProps } = useDropzone({
    ...props,
    accept: {
      'image/*': []
    },
    multiple,
    maxFiles,
    onDrop: (acceptedFiles) => {
      clearErrors(name)
      const dataTransfer = new DataTransfer()

      const filesWithPreview = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )

      filesWithPreview.forEach((file) => dataTransfer.items.add(file))
      //@ts-expect-error setValue is not typed
      setValue(name, dataTransfer.files)
    },
    onDropRejected: (fileRejections) => {
      setError(name, {
        type: 'manual',
        message: fileRejections[0].errors[0].message
      })
    }
  })
  const error: FieldError = get(errors, name)
  const files: FileWithPreview[] = Array.from(watch(name) || [])

  const thumbs = files?.map((file) => (
    <div
      key={file.name}
      className="mb-2 mr-2 box-border inline-flex h-[100px] w-[100px] rounded border border-[#eaeaea] p-1"
    >
      <div className="flex min-w-0 overflow-hidden">
        <img
          alt={file.name}
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </div>
    </div>
  ))

  useEffect(() => {
    return () => files?.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [files])

  return (
    <Controller
      name={name}
      control={control}
      render={() => {
        return (
          <section className="relative space-y-2">
            <div
              {...getRootProps()}
              className={twMerge([
                'flex flex-col items-center justify-center rounded-sm border border-dashed bg-slate-50 px-4 py-6 focus-within:border-dashed focus-within:border-info',
                error
                  ? 'border-danger focus-within:border-danger'
                  : 'border-slate-400'
              ])}
            >
              <input {...getInputProps()} />
              <IoMdCloudUpload className="text-7xl text-slate-400" />
              <p className="text-center font-semibold text-slate-500">
                Drag and drop some files here, or click to select files
              </p>
              <pre className="my-2">(maximum of {maxFiles} files)</pre>

              <AnimatePresence>
                {error && (
                  <span className="absolute bottom-2 text-danger">
                    {error?.message?.toString()}
                  </span>
                )}
              </AnimatePresence>
            </div>
            <aside className="">{thumbs}</aside>
          </section>
        )
      }}
    />
  )
}
