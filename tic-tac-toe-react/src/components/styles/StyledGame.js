import styled from 'styled-components';

export const StyledGame = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .game {
        display: flex;
        flex-direction: column;
    }

    .game-row {
        display: flex;
    }

    .game-row:after {
        clear: both;
        content: "";
        display: table;
    }

`;