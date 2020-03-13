import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledLogo } from './styles/StyledLogo';

const Logo = ({pretitle, title, subtitle, variant}) => {

	const className = classNames({
		'logo-title': true,
		[variant]: variant,
	})

	return (
		<StyledLogo>
			<p className={className}>
				<span>{pretitle}</span>
				<span className="logo-title-middle">{title}</span>
				<span className="logo-title-last">{subtitle}</span>
			</p>
		</StyledLogo>
	);
}

Logo.propTypes = {
	pretitle: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	variant: PropTypes.string,
}

export default Logo;