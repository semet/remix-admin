import { MetaFunction } from '@remix-run/react'
import { useState } from 'react'

import { Button, Card, SidePanel } from '~/components/base-ui'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Modal',
      description: 'Modal page'
    }
  ]
}
const position = ['left', 'right'] as const

const SidePanelPage = () => {
  const [isOpenSidePanelSm, setIsOpenSidePanelSm] = useState({
    position: {
      left: false,
      right: false
    }
  })
  const [isOpenSidePanelMd, setIsOpenSidePanelMd] = useState({
    position: {
      left: false,
      right: false
    }
  })
  const [isOpenSidePanelLg, setIsOpenSidePanelLg] = useState({
    position: {
      left: false,
      right: false
    }
  })
  return (
    <>
      <PageTitle title="Side Panel" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-2"
          title="Side Panel Example"
        >
          <span className="font-semibold text-slate-600">Side Panel Small</span>
          <div className="flex flex-wrap gap-4">
            {position.map((pos) => (
              <SidePanel
                key={pos}
                position={pos}
                size="sm"
                isOpen={isOpenSidePanelSm.position[pos]}
                setIsOpen={() =>
                  setIsOpenSidePanelSm({
                    ...isOpenSidePanelSm,
                    position: {
                      ...isOpenSidePanelSm.position,
                      [pos]: !isOpenSidePanelSm.position[pos]
                    }
                  })
                }
                button={
                  <Button
                    variant="info"
                    onClick={() =>
                      setIsOpenSidePanelSm({
                        ...isOpenSidePanelSm,
                        position: {
                          ...isOpenSidePanelSm.position,
                          [pos]: !isOpenSidePanelSm.position[pos]
                        }
                      })
                    }
                    className="capitalize"
                  >
                    Side Panel {pos}
                  </Button>
                }
                title={`Side Panel ${pos}`}
              >
                {Array.from({ length: 30 }).map((_, index) => (
                  <p
                    key={index}
                    className="text-sm text-gray-500"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla tincidunt, nunc in gravida aliquam, lectus sapien
                    tincidunt quam, sit amet tristique risus nunc vitae nunc.
                  </p>
                ))}
                <div className="flex gap-2">
                  <Button
                    variant="error"
                    onClick={() =>
                      setIsOpenSidePanelSm({
                        ...isOpenSidePanelSm,
                        position: {
                          ...isOpenSidePanelSm.position,
                          [pos]: !isOpenSidePanelSm.position[pos]
                        }
                      })
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      setIsOpenSidePanelSm({
                        ...isOpenSidePanelSm,
                        position: {
                          ...isOpenSidePanelSm.position,
                          [pos]: !isOpenSidePanelSm.position[pos]
                        }
                      })
                    }
                  >
                    save
                  </Button>
                </div>
              </SidePanel>
            ))}
          </div>
          <span className="mt-2 font-semibold text-slate-600">
            Side Panel Medium
          </span>
          <div className="flex flex-wrap gap-4">
            {position.map((pos) => (
              <SidePanel
                key={pos}
                position={pos}
                size="md"
                isOpen={isOpenSidePanelMd.position[pos]}
                setIsOpen={() =>
                  setIsOpenSidePanelMd({
                    ...isOpenSidePanelMd,
                    position: {
                      ...isOpenSidePanelMd.position,
                      [pos]: !isOpenSidePanelMd.position[pos]
                    }
                  })
                }
                button={
                  <Button
                    variant="info"
                    onClick={() =>
                      setIsOpenSidePanelMd({
                        ...isOpenSidePanelMd,
                        position: {
                          ...isOpenSidePanelMd.position,
                          [pos]: !isOpenSidePanelMd.position[pos]
                        }
                      })
                    }
                    className="capitalize"
                  >
                    Side Panel {pos}
                  </Button>
                }
                title={`Side Panel ${pos}`}
              >
                {Array.from({ length: 30 }).map((_, index) => (
                  <p
                    key={index}
                    className="text-sm text-gray-500"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla tincidunt, nunc in gravida aliquam, lectus sapien
                    tincidunt quam, sit amet tristique risus nunc vitae nunc.
                  </p>
                ))}
                <div className="flex gap-2">
                  <Button
                    variant="error"
                    onClick={() =>
                      setIsOpenSidePanelMd({
                        ...isOpenSidePanelMd,
                        position: {
                          ...isOpenSidePanelMd.position,
                          [pos]: !isOpenSidePanelMd.position[pos]
                        }
                      })
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      setIsOpenSidePanelMd({
                        ...isOpenSidePanelMd,
                        position: {
                          ...isOpenSidePanelMd.position,
                          [pos]: !isOpenSidePanelMd.position[pos]
                        }
                      })
                    }
                  >
                    save
                  </Button>
                </div>
              </SidePanel>
            ))}
          </div>
          <span className="mt-2 font-semibold text-slate-600">
            Side Panel Large
          </span>
          <div className="flex flex-wrap gap-4">
            {position.map((pos) => (
              <SidePanel
                key={pos}
                position={pos}
                size="lg"
                isOpen={isOpenSidePanelLg.position[pos]}
                setIsOpen={() =>
                  setIsOpenSidePanelLg({
                    ...isOpenSidePanelLg,
                    position: {
                      ...isOpenSidePanelLg.position,
                      [pos]: !isOpenSidePanelLg.position[pos]
                    }
                  })
                }
                button={
                  <Button
                    variant="info"
                    onClick={() =>
                      setIsOpenSidePanelLg({
                        ...isOpenSidePanelLg,
                        position: {
                          ...isOpenSidePanelLg.position,
                          [pos]: !isOpenSidePanelLg.position[pos]
                        }
                      })
                    }
                    className="capitalize"
                  >
                    Side Panel {pos}
                  </Button>
                }
                title={`Side Panel ${pos}`}
              >
                {Array.from({ length: 30 }).map((_, index) => (
                  <p
                    key={index}
                    className="text-sm text-gray-500"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla tincidunt, nunc in gravida aliquam, lectus sapien
                    tincidunt quam, sit amet tristique risus nunc vitae nunc.
                  </p>
                ))}
                <div className="flex gap-2">
                  <Button
                    variant="error"
                    onClick={() =>
                      setIsOpenSidePanelLg({
                        ...isOpenSidePanelLg,
                        position: {
                          ...isOpenSidePanelLg.position,
                          [pos]: !isOpenSidePanelLg.position[pos]
                        }
                      })
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      setIsOpenSidePanelLg({
                        ...isOpenSidePanelLg,
                        position: {
                          ...isOpenSidePanelLg.position,
                          [pos]: !isOpenSidePanelLg.position[pos]
                        }
                      })
                    }
                  >
                    save
                  </Button>
                </div>
              </SidePanel>
            ))}
          </div>
        </Card>
      </PageContainer>
    </>
  )
}

export default SidePanelPage
