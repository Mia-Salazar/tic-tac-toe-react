import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({onClick}) => {
	const { t } = useTranslation();

	return (
		<StyledStartButton role="button" onClick={onClick}>
            {t('play')}
		</StyledStartButton>
	);
}

export default StartButton;