import React from 'react'

export default function Card({ object, name }) {
    return (
        <><div>
            {object && name}
            {object && <img src={object.image} />}
        </div></>

    )
}
