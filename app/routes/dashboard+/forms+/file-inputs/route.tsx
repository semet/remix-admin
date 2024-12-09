import { zodResolver } from '@hookform/resolvers/zod'
import { MetaFunction } from '@remix-run/react'
import { useForm, FormProvider } from 'react-hook-form'

import { Button, Card } from '~/components/base-ui'
import { DragAndDrop, FileInput } from '~/components/forms'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { FileInputForm, inputSchema } from './schema'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'File Input Page',
      description: 'File Input Page Example'
    }
  ]
}

const FileInputPage = () => {
  const formMethods = useForm<FileInputForm>({
    resolver: zodResolver(inputSchema)
  })
  const { handleSubmit, clearErrors } = formMethods
  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <>
      <PageTitle title="File Input" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Basic File Input"
        >
          <FormProvider {...formMethods}>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-2"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <FileInput<FileInputForm>
                  name="singleFile"
                  label="Single File"
                  required
                />
                <FileInput<FileInputForm>
                  name="multipleFiles"
                  label="Multiple File"
                  required
                  multiple
                />
                <FileInput<FileInputForm>
                  name="disabledFile"
                  label="Disabled File"
                  disabled
                />
              </div>
              <div className="mt-4">
                <DragAndDrop<FileInputForm>
                  multiple
                  maxFiles={2}
                  name="dragAndDrop"
                />
              </div>
              <div className="mt-6 flex justify-center gap-2">
                <Button
                  type="reset"
                  variant="error"
                >
                  Reset
                </Button>
                <Button type="submit">Submit</Button>
                <Button
                  type="reset"
                  variant="warning"
                  onClick={() => clearErrors()}
                >
                  Clear Error
                </Button>
              </div>
            </form>
          </FormProvider>
        </Card>
      </PageContainer>
    </>
  )
}

export default FileInputPage
