import React from 'react'

import style from './NotFoundBlock.module.scss';

const NotFoundBlock:React.FC = () => {
  return (
    <div className={style.root}>
        <h1>Ничего не найдено!</h1>
    </div>
  )
};

export default NotFoundBlock;