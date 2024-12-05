import { MetaFunction } from '@remix-run/react'
import { useState } from 'react'

import { Button, Card, Modal } from '~/components/base-ui'
import { PageContainer, PageTitle } from '~/layouts/dashboard'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Modal',
      description: 'Modal page'
    }
  ]
}

const ModalPage = () => {
  const sizes = ['sm', 'md', 'lg'] as const

  const [isOpenSimpleModal, setIsOpenSimpleModal] = useState({
    size: {
      sm: false,
      md: false,
      lg: false
    }
  })
  const [isOpenScrollableModal, setIsOpenScrollableModal] = useState({
    size: {
      sm: false,
      md: false,
      lg: false
    }
  })
  return (
    <>
      <PageTitle title="Modal" />
      <PageContainer className="space-y-4">
        <Card
          className="flex flex-col gap-2"
          title="Modal Example"
        >
          <span className="font-semibold text-slate-600">
            Simple Modal With Sizes
          </span>
          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <Modal
                key={size}
                size={size}
                isOpen={isOpenSimpleModal.size[size]}
                setIsOpen={() =>
                  setIsOpenSimpleModal({
                    ...isOpenSimpleModal,
                    size: {
                      ...isOpenSimpleModal.size,
                      [size]: !isOpenSimpleModal.size[size]
                    }
                  })
                }
                button={
                  <Button
                    size={size}
                    onClick={() =>
                      setIsOpenSimpleModal({
                        ...isOpenSimpleModal,
                        size: {
                          ...isOpenSimpleModal.size,
                          [size]: !isOpenSimpleModal.size[size]
                        }
                      })
                    }
                    className="capitalize"
                  >
                    Modal {size}
                  </Button>
                }
                title={<p className="capitalize">{`Modal ${size}`}</p>}
              >
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  tincidunt, nunc in gravida aliquam, lectus sapien tincidunt
                  quam, sit amet tristique risus nunc vitae nunc.
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="error"
                    onClick={() =>
                      setIsOpenSimpleModal({
                        ...isOpenSimpleModal,
                        size: {
                          ...isOpenSimpleModal.size,
                          [size]: !isOpenSimpleModal.size[size]
                        }
                      })
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      setIsOpenSimpleModal({
                        ...isOpenSimpleModal,
                        size: {
                          ...isOpenSimpleModal.size,
                          [size]: !isOpenSimpleModal.size[size]
                        }
                      })
                    }
                  >
                    save
                  </Button>
                </div>
              </Modal>
            ))}
          </div>

          <span className="mt-2 font-semibold text-slate-600">
            Scrollable Modal
          </span>
          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <Modal
                key={size}
                size={size}
                scrollable
                isOpen={isOpenScrollableModal.size[size]}
                setIsOpen={() =>
                  setIsOpenScrollableModal({
                    ...isOpenScrollableModal,
                    size: {
                      ...isOpenScrollableModal.size,
                      [size]: !isOpenScrollableModal.size[size]
                    }
                  })
                }
                button={
                  <Button
                    size={size}
                    variant="info"
                    onClick={() =>
                      setIsOpenScrollableModal({
                        ...isOpenScrollableModal,
                        size: {
                          ...isOpenScrollableModal.size,
                          [size]: !isOpenScrollableModal.size[size]
                        }
                      })
                    }
                    className="capitalize"
                  >
                    Scrollable Modal {size}
                  </Button>
                }
                title={<p className="capitalize">{`Modal ${size}`}</p>}
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
                      setIsOpenScrollableModal({
                        ...isOpenScrollableModal,
                        size: {
                          ...isOpenScrollableModal.size,
                          [size]: !isOpenScrollableModal.size[size]
                        }
                      })
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() =>
                      setIsOpenScrollableModal({
                        ...isOpenSimpleModal,
                        size: {
                          ...isOpenSimpleModal.size,
                          [size]: !isOpenSimpleModal.size[size]
                        }
                      })
                    }
                  >
                    save
                  </Button>
                </div>
              </Modal>
            ))}
          </div>
        </Card>
      </PageContainer>
    </>
  )
}

export default ModalPage
