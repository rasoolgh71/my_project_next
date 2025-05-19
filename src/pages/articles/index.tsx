import {useRouter} from 'next/router'
import {useSearchParams} from 'next/navigation'
export default function Articles() {
  const router=useRouter();
  // console.log(router.query);
  const searchParams = useSearchParams()
  // @ts-ignore
    const id = searchParams.get('id')
  // @ts-ignore
    const title = searchParams.get('title')
  return (
      <>
        <p> article page </p>
        <p> title: {title} </p>
        <p> id:{id}  </p>
          {/*or*/}
        <p> id --:{router.query.id}  </p>
        <p> title ---:{router.query.title}  </p>
      </>
 )
}
