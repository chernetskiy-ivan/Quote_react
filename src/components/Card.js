import React,{useState, useEffect} from 'react'

function Card() {

    const [count, setCount] = useState(0)
    const [title,setTitle] = useState('Привет')
    const [body, setBody] = useState('Привет')

    const increment = () => {
        setCount( count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    function getContent(number){
        if(number >= 1) {
            fetch(`https://jsonplaceholder.typicode.com/posts?id=${number}`)
                .then(response => response.json())
                .then(data => {
                    data.forEach( element => {
                        setTitle(element.title)
                        setBody(element.body)
                        console.log(element)
                        console.log(element.title)
                    })
                })
        } else {
            setTitle('Вы в начале')
            setBody('Да да, Вы в начале')
        }
    }

    useEffect( () => {
        getContent(count)
    }, [count])

    return (
        <div className='card'>
            <div className='title'>{title}</div>
            <div className='quote'>{body}</div>
            <div className='footer'>
                <div className='btn btn-back' onClick={decrement}>Назад</div>
                <div className='btn btn-ahead' onClick={increment}>Вперед</div>
            </div>
        </div>
    )
}

export default Card;