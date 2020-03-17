import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './styles/StyledCard';

const Card = ({type, props}) => {


	return (
        'Holi'
		// <StyledCard role="button" onClick={props.onClick}>
        //     {type}
		// </StyledCard>
	);
}

Card.propTypes = {
    type: PropTypes.string
}

export default Card;