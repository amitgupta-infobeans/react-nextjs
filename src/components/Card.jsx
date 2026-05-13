import React from 'react'

const Card = (props) => {
    const { tle, desc, cardImg } = props
    return (



        <div className="mt-10 bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
            <a href="#">
                <img className="rounded-t-base" src={cardImg} alt="" />
            </a>
            <div className="p-6 text-center">
                <h2>{tle}</h2>
                <a href="#">
                    <h5 className="mt-3 mb-6  font-semibold tracking-tight text-heading">{desc}</h5>
                </a>
                <a href="#" className="text-white bg-black p-2">
                    Read more

                </a>
            </div>
        </div>

    )
}

export default Card