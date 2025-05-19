import {useRouter} from 'next/router'
import {useParams} from 'next/navigation'
export default function Articles() {
  const router=useRouter();
  console.log(router.query);
  const Params = useParams()
  // @ts-ignore
    const title = Params.title
  return (
      <>
        <p> article page </p>
        <p> title: {title} </p>
        <p> title: {router.query.title} </p>

      </>
 )
}
