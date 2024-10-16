import { notFound } from 'next/navigation'
import { db } from '@/db'
import SnippetEditForm from '@/components/snippet-edit-form'

interface SnippetEditPageProps {
  params: {
    id: string
  }
}

const SnippetEditPage = async ({ params }: SnippetEditPageProps) => {
  const id = +params.id
  const snippet = await db.snippet.findFirst({
    where: { id },
  })

  if (!snippet) {
    return notFound()
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}

export default SnippetEditPage
