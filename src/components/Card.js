import React,{useState} from 'react'

function Card() {

    const [count, setCount] = useState(1)
    const [title,setTitle] = useState('Привет')
    const [body, setBody] = useState('Привет')

    const increment = () => {
        setCount( count + 1)
        console.log(count)
        getContent(count)
    }

    function getContent(number){
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
    }

    return (
        <div className='card'>
            <div className='title'>{title}</div>
            <div className='quote'>{body}</div>
            <div className='footer'>
                <div className='btn btn-back'>Назад</div>
                <div className='btn btn-ahead' onClick={increment}>Вперед</div>
            </div>
        </div>
    )
}

export default Card;