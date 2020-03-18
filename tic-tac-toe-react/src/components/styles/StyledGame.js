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

    .next-player {
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
    }

    .game-info{
        display: flex;
        justify-content: center;
    }

    .winner {
        position: relative;
        display: flex;
        justify-content: center;
        color: black;
        font-size: 32px;
        font-family: 'Rubik', sans-serif;

        &:after {
            content: '';
            position: absolute;
            right: -7px;
            background-color: #5b8c5a;
            width: 33px;
            height: 40px;
            z-index: -1;
        }
    }

`;