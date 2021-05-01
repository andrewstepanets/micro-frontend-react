import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
      <h1>Page Not found</h1>
      <p>Pleade return to <Link to="/">Home Page</Link></p>
    </>
  )
}