import React from 'react'

function Card() {
    return (
        <div className='card'>
            <div className='title'>title</div>
            <div className='quote'>Quote here!</div>
            <div className='footer'>
                <div className='btn btn-back'>Назад</div>
                <div className='btn btn-ahead'>Вперед</div>
            </div>
        </div>
    )
}

export default Card;