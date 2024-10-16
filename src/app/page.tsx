import { db } from '@/db'
import Link from 'next/link'

// forces NextJS to look at this component/route as Dynamic
// and delete caching -- don't need in this project

// export const dynamic = 'force-dynamic'

const Home = async () => {
  const snippets = await db.snippet.findMany()

  const renderedSnippets = snippets.map((snippet: any) => (
    <Link
      className='flex justify-between items-center p-2 border rounded'
      href={`/snippets/${snippet.id}`}
      key={snippet.id}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ))

  return (
    <div>
      <div className='flex m-2 justify-between items-center'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link href='/snippets/new' className='border p-2 rounded'>
          New
        </Link>
      </div>
      <div className='flex flex-col gap-2'>{renderedSnippets}</div>
    </div>
  )
}

export default Home
