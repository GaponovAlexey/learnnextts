import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useAction } from '../src/hooks/useActions'
import { useTypeSelector } from '../src/hooks/useTypeSelector'

const Home: React.FC = () => {
  const { error, loading, users } = useTypeSelector(state => state.users)
  const { limit, page, user } = useTypeSelector(state => state.todos)
  //const data = useSelector(state => state.users.users)
  const { fetchAction, pageAction, fetchActionTodo } = useAction()

  const pages = [1, 2, 3, 4, 5, 6]
  useEffect(() => {
    fetchAction()
    fetchActionTodo(page, limit)
  }, [page])


  if (loading) {
    return <h1>загрузка идет </h1>
  }
  if (error) {
    return <h1> EROOR </h1>
  }
  return (
    <div>
      {users.map(e => <h3 key={e.id}>{e.name}</h3>)}
      <hr></hr>
      <div>
        {user.map(todo => <div key={todo.id} >{todo.id} - {todo.title}</div>)}
        <div style={{ display: 'flex' }}>
          {pages.map(p => <div
            onClick={() => pageAction(p)}
            style={{ border: p === page ? '1px solid green' : '2px solid' }}
          >{p}</div>)}
        </div>
      </div>
    </div>
  )
}

export default Home
