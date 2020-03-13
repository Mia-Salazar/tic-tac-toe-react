import styled from 'styled-components';

export const StyledLogo = styled.footer`
	.logo-title {
		display: flex;
		flex-direction: column;
		margin: 0;
		color: #fff;
		font-size: 42px;
		font-weight: 600;
		font-family: 'Rubik', sans-serif;

		@media (min-width: 768px){
			font-size: 60px;
		}

		&.footer {
			font-size: 30px;

			.logo-title-middle {
				margin-top: -13px;
    			margin-left: 22px;
			}

			.logo-title-last {
				margin-top: -13px;
    			margin-left: 54px;

			}
		}
	}

  .logo-title-middle {
    margin-top: -25px;
    margin-left: 42px;
    color: #3A5939;
    font-weight: 900;
  }

  .logo-title-last {
    margin-top: -25px;
    margin-left: 102px;
  }

`;