import { MetaFunction } from '@remix-run/react'
import { Card } from '~/components/base-ui'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Card',
      description: 'Card page'
    }
  ]
}

const CardsPage = () => {
  return (
    <>
      <PageTitle title="Cards" />
      <PageContainer className="space-y-4">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Basic Card">
            <p className="text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              mollitia esse quam veniam fugiat velit illo atque quisquam.
            </p>
          </Card>
          <Card title="Basic Card">
            <p className="text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              mollitia esse quam veniam fugiat velit illo atque quisquam.
            </p>
          </Card>
          <Card title="Basic Card">
            <p className="text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              mollitia esse quam veniam fugiat velit illo atque quisquam.
            </p>
          </Card>
          <Card title="Basic Card">
            <p className="text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              mollitia esse quam veniam fugiat velit illo atque quisquam.
            </p>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Basic Card">
            <p className="text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              mollitia esse quam veniam fugiat velit illo atque quisquam.
            </p>
          </Card>
          <Card title="Basic Card">
            <p className="text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              mollitia esse quam veniam fugiat velit illo atque quisquam.
            </p>
          </Card>
          <Card title="Basic Card">
            <p className="text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              mollitia esse quam veniam fugiat velit illo atque quisquam.
            </p>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Card>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus placeat vero quis eaque voluptatum a facere ex, ut
              itaque beatae ducimus dolorem doloremque eius cupiditate. Dolores,
              architecto! Ad, officiis enim.
            </p>
          </Card>
          <Card>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus placeat vero quis eaque voluptatum a facere ex, ut
              itaque beatae ducimus dolorem doloremque eius cupiditate. Dolores,
              architecto! Ad, officiis enim.
            </p>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Card title="Full Width">
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus placeat vero quis eaque voluptatum a facere ex, ut
              itaque beatae ducimus dolorem doloremque eius cupiditate. Dolores,
              architecto! Ad, officiis enim. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At et odio voluptatibus doloribus,
              ut atque quos ullam qui dolore corporis repudiandae, voluptatem
              quam. Pariatur esse laborum error illo provident dolor.
            </p>
          </Card>
        </div>
      </PageContainer>
    </>
  )
}

export default CardsPage
