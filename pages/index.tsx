import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useAction } from '../src/hooks/useActions'
import { useTypeSelector } from '../src/hooks/useTypeSelector'

const Home: React.FC = () => {
  const { error, loading, users } = useTypeSelector(state => state.users)
  //const data = useSelector(state => state.users.users)
  const { fetchAction } = useAction()
  
  
  useEffect(() => {
    fetchAction()
  }, [])


  if (loading) {
    return <h1>загрузка идет </h1>
  }
  if (error) {
    return <h1> EROOR </h1>
  }
  return (
    <div>
      {users.map(e => <h1>{e.name}</h1>)}
    </div>
  )
}

export default Home
