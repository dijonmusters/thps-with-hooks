import React from 'react'
import useRequest from './hooks/useRequest'

const url = 'https://thps.now.sh/api/skaters'

const renderSkater = ({ name, stance }) => (
  <div key={name}>
    <p>
      {name} - {stance}
    </p>
  </div>
)

const Skaters = ({ useCache }) => {
  const { data: skaters, loading, error } = useRequest(url, useCache)

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>There was an error!</p>}
      {skaters && <div className="panel">{skaters.map(renderSkater)}</div>}
    </div>
  )
}

export default Skaters
