import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './styles/StyledCard';

const Card = ({type, onClick}) => {


	return (
		<StyledCard role="button" onClick={onClick}>
            {type}
		</StyledCard>
	);
}

Card.propTypes = {
    type: PropTypes.string
}

export default Card;