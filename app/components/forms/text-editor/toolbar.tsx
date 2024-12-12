import { Level } from '@tiptap/extension-heading'
import { Editor } from '@tiptap/react'
import { FC, useCallback } from 'react'
import { BsBlockquoteRight } from 'react-icons/bs'
import { FaParagraph } from 'react-icons/fa6'
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6
} from 'react-icons/lu'
import {
  MdClearAll,
  MdCode,
  MdFormatBold,
  MdFormatClear,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdKeyboardReturn,
  MdOutlineFormatAlignCenter,
  MdOutlineFormatAlignJustify,
  MdOutlineFormatAlignLeft,
  MdOutlineFormatAlignRight,
  MdOutlineImage,
  MdOutlineLink,
  MdOutlineLinkOff,
  MdRedo,
  MdUndo
} from 'react-icons/md'
import { PiCodeBlock } from 'react-icons/pi'

import { EditorButton } from './button'

export const Toolbar: FC<{
  editor: Editor | null
}> = (props) => {
  const { editor } = props

  const setLink = useCallback(() => {
    if (!editor) return
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  const addImage = useCallback(() => {
    if (!editor) return
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) return null
  return (
    <div className="rounded-t border-x border-b border-t bg-white p-4">
      <div className="flex flex-wrap items-center gap-2">
        <EditorButton
          title="Undo"
          icon={<MdUndo />}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        />
        <EditorButton
          title="Redo"
          icon={<MdRedo />}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        />
        <EditorButton
          title="Paragraph"
          icon={<FaParagraph />}
          onClick={() => editor.chain().focus().setParagraph().run()}
          disabled={!editor.can().setParagraph()}
        />
        {Array.from({ length: 6 }).map((_, index) => (
          <EditorButton
            key={index}
            title={`Heading ${index + 1}`}
            icon={
              index === 0 ? (
                <LuHeading1 />
              ) : index === 1 ? (
                <LuHeading2 />
              ) : index === 2 ? (
                <LuHeading3 />
              ) : index === 3 ? (
                <LuHeading4 />
              ) : index === 4 ? (
                <LuHeading5 />
              ) : (
                <LuHeading6 />
              )
            }
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({
                  level: (index + 1) as unknown as Level
                })
                .run()
            }
            active={editor.isActive('heading', { level: index + 1 })}
          />
        ))}

        <EditorButton
          title="Bold"
          icon={<MdFormatBold />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
        />
        <EditorButton
          title="Italic"
          icon={<MdFormatItalic />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
        />
        <EditorButton
          title="Underline"
          icon={<MdFormatUnderlined />}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
        />
        <EditorButton
          title="Strikethrough"
          icon={<MdFormatStrikethrough />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          active={editor.isActive('strike')}
        />
        <EditorButton
          title="Code"
          icon={<MdCode />}
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          active={editor.isActive('code')}
        />
        <EditorButton
          title="Clear formatting"
          icon={<MdFormatClear />}
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        />
        <EditorButton
          title="Line break"
          icon={<MdKeyboardReturn />}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        />
        <EditorButton
          title="Clear all"
          icon={<MdClearAll />}
          onClick={() => editor.chain().focus().clearNodes().run()}
        />
        <EditorButton
          title="Bullet list"
          icon={<MdFormatListBulleted />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
        />
        <EditorButton
          title="Numbered list"
          icon={<MdFormatListNumbered />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
        />
        <EditorButton
          title="Code block"
          icon={<PiCodeBlock />}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          active={editor.isActive('codeBlock')}
        />
        <EditorButton
          title="Blockquote"
          icon={<BsBlockquoteRight />}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={!editor.can().chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
        />
        <EditorButton
          title="Image"
          icon={<MdOutlineImage />}
          onClick={addImage}
        />
        <EditorButton
          title="Link"
          icon={<MdOutlineLink />}
          onClick={setLink}
        />
        <EditorButton
          title="Unlink"
          icon={<MdOutlineLinkOff />}
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        />
        <EditorButton
          title=""
          icon={<MdOutlineFormatAlignLeft />}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          active={editor.isActive({ textAlign: 'left' })}
        />
        <EditorButton
          title=""
          icon={<MdOutlineFormatAlignCenter />}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          active={editor.isActive({ textAlign: 'center' })}
        />
        <EditorButton
          title=""
          icon={<MdOutlineFormatAlignRight />}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          active={editor.isActive({ textAlign: 'right' })}
        />
        <EditorButton
          title=""
          icon={<MdOutlineFormatAlignJustify />}
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          active={editor.isActive({ textAlign: 'justify' })}
        />
      </div>
    </div>
  )
}
