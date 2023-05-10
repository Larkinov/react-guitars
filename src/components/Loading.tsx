import React from 'react'
import "../scss/components/Loading.scss";

function Loading() {
  return (
    <div className='loading'>
        <h1>Идет загрузка...</h1>
        <h2>Пожалуйста, подождите</h2>
    </div>
  )
}

export default Loading