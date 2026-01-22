import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div
      className="
        shrink-0 overflow-hidden relative
        h-[320px] sm:h-[380px] md:h-full
        w-[240px] sm:w-[280px] lg:w-80
        rounded-3xl
      "
    >
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt={props.tag || 'card image'}
      />

      <RightCardContent
        id={props.id}
        tag={props.tag}
        color={props.color}
      />
    </div>
  )
}

export default RightCard
