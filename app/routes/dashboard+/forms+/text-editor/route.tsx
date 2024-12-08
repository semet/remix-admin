import { zodResolver } from '@hookform/resolvers/zod'
import { MetaFunction } from '@remix-run/react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Card } from '~/components/base-ui'
import { CodeEditor, Textarea, TextEditor } from '~/components/forms'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

import { inputSchema, TextEditorForm } from './schema'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Text Editor',
      description: 'Text Editor Page'
    }
  ]
}

const TextEditorPage = () => {
  const formMethods = useForm<TextEditorForm>({
    resolver: zodResolver(inputSchema)
  })

  const { handleSubmit, clearErrors, reset } = formMethods
  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })

  return (
    <>
      <PageTitle title="Text Editor" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-4"
          title="Editor Example"
        >
          <FormProvider {...formMethods}>
            <form onSubmit={onSubmit}>
              <div className="space-y-4">
                <Textarea<TextEditorForm>
                  label="Comments"
                  name="comment"
                  placeholder="Type your comment here..."
                  required
                />
                <TextEditor<TextEditorForm>
                  name="message"
                  label="Message"
                  required
                />
                <CodeEditor<TextEditorForm>
                  name="metas"
                  label="Metas"
                  language="html"
                  required
                />
              </div>

              <div className="mt-6 flex justify-center gap-2">
                <Button
                  type="reset"
                  variant="error"
                  onClick={() => reset()}
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

export default TextEditorPage
