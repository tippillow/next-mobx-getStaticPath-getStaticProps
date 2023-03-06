import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useStore } from './StoreProvider'

const Page = observer(function Page(props) {
  const store = useStore()

  return (
    <div>
      <div>You choose {store.country || 'no country'}</div>
      <nav>
        {props.links.map((c) => {
          return <div key={c}>
            <Link href={`/countries/${c}`}>{c}</Link>
          </div>
        })}
      </nav>
    </div>
  )
})

export default Page
