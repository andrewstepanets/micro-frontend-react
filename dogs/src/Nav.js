

function Nav({ refetch }) {
  return (
    <header>
      <h2>Dog of the day</h2>
      <button onClick={() => refetch()}>New Dog</button>
    </header>
  )
}

export default Nav