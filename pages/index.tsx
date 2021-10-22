import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAction } from '../src/action/fetchAction'

const Home: NextPage = () => {

  const data = useSelector(state => state.users.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAction())
  }, [])
  return (
    <div>
      {data.map(e => <h1>{e.name}</h1>)}
    </div>
  )
}

export default Home
