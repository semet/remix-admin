import { TabData } from '~/types'

export const dummyTabData: TabData<string>[] = [
  {
    head: {
      key: 'tab1',
      label: 'Tab 1'
    },
    panel: {
      key: 'tab1',
      content: (
        <p className="prose-lg text-base leading-relaxed text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          quis hendrerit libero, eu convallis turpis. Nulla rutrum rutrum lorem,
          at scelerisque lacus sagittis eu. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. In
          pharetra convallis rhoncus. Donec vehicula, arcu non dictum malesuada,
          nisi odio ornare tortor, at molestie nisl sapien eget mi. Pellentesque
          at sem est. Nullam at interdum eros. Donec sed mi eu mauris fringilla
          scelerisque. Duis vel diam vitae lorem consequat molestie. Sed in
          purus eget nulla imperdiet pharetra venenatis vitae velit. Etiam
          sagittis neque non ipsum fermentum, et faucibus urna feugiat. Ut sit
          amet commodo mi, a commodo lacus. Mauris ut orci faucibus tellus
          tincidunt cursus. Proin a purus at velit vestibulum malesuada at sed
          arcu. Duis maximus, justo ac vulputate vehicula, velit est faucibus
          lectus, quis tristique risus libero eget arcu. Vivamus justo dui,
          pulvinar a semper in, faucibus sit amet ante.
        </p>
      )
    }
  },
  {
    head: {
      key: 'tab2',
      label: 'Tab 2'
    },
    panel: {
      key: 'tab2',
      content: (
        <p className="prose-lg text-base leading-relaxed text-slate-600">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Praesent mauris libero, consectetur eget arcu
          eget, tincidunt consectetur quam. Ut eleifend, nisl consequat
          malesuada viverra, arcu massa vulputate nisi, a pulvinar ipsum ex in
          velit. Morbi et molestie est. Suspendisse tempor eget ex consequat
          lobortis. Pellentesque tempor enim quis velit mattis auctor. Nullam
          cursus, eros faucibus elementum varius, neque nibh consectetur lectus,
          nec faucibus neque orci sit amet diam. Donec nulla metus, mattis eget
          elit vitae, tempor lacinia orci. Cras auctor hendrerit tristique.
          Etiam finibus, nibh quis imperdiet suscipit, velit diam semper sem,
          vel porttitor eros risus eget nisl. Fusce quis tortor at massa
          eleifend ultrices. Fusce ut felis velit.
        </p>
      )
    }
  },
  {
    head: {
      key: 'tab3',
      label: 'Tab 3'
    },
    panel: {
      key: 'tab3',
      content: (
        <p className="prose-lg text-base leading-relaxed text-slate-600">
          Fusce at turpis tincidunt, egestas nisi lobortis, auctor nunc. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Duis tempus ullamcorper lorem, ac feugiat nisl
          ullamcorper a. Phasellus mi libero, semper vestibulum diam non,
          tincidunt maximus ante. Duis eleifend augue eget purus vehicula
          aliquet. Curabitur nec malesuada urna. Phasellus porta lorem
          vestibulum sapien sollicitudin aliquet. Nullam dapibus et tellus sit
          amet sagittis. Etiam ex elit, interdum ut volutpat eu, pellentesque
          pulvinar lacus. Nunc massa metus, maximus quis nulla eu, rhoncus
          lacinia erat. Maecenas ornare ullamcorper commodo. Nulla a metus
          elementum, sagittis est vel, condimentum lacus. Ut non aliquam sapien.
          Morbi convallis nulla ac magna suscipit condimentum. Sed interdum
          dictum lacus, id aliquam purus fringilla in.
        </p>
      )
    }
  }
]
