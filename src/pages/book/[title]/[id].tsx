import {useRouter} from 'next/router'
import {useParams} from 'next/navigation'
export default function Book() {
    const router=useRouter()
    console.log(router);
    console.log(router.query);
  // const Params = useParams()
  // @ts-ignore
  //   const id =Params.id
  return (
      <>
        <p> book page </p>
        <p> id: {router.query.id} </p>
        {/*<p> id: {id} </p>*/}
        <p> title: {router.query.title} </p>


      </>
 )
}
