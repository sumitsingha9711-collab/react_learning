import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='h-64 w-full overflow-hidden rounded-xl'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
                </div>
                <h3 className='text-lg font-bold mt-2'>{props.elem.author}</h3>
            </a>
        </div>
    )
}

export default Card
