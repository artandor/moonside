import React from 'react'
import Review from 'react-rating'
import { MdStar, MdStarBorder } from 'react-icons/md'

export default class TopServerReview extends Review {
    render() {
        return (
            <Review step={1} start={0} stop={5} initialRating={this.props.initialRating} fractions={4} emptySymbol={<MdStarBorder color="#b37e7c" />} 
            readonly={true} fullSymbol={<MdStar color="#b37e7c"  />} />
        )
    }
}
