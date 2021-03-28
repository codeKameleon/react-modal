import styled from 'styled-components';

const Spinner = styled.svg`
        animation: Spin 2s infinite linear;

        circle {
            fill: #000;
        }
        
        path {
            animation: PacMan 5s infinite;
            fill: none;
            stroke: #FBB117;
            stroke-width: 25;
        }

        @keyframes PacMan {
        0% {
            stroke-dasharray: 79px 79;
        }
        50% {
            stroke-dasharray: 1px 79;
        }
        100% {
            stroke-dasharray: 79px 79;
        }
        }

        @keyframes Spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }
`

export const Loader = () => {
    return(
        <>
            <Spinner width="150" height="150" viewBox="0 0 100 100">
                <circle r="24" cx="50" cy="50"></circle>
                <path
                    d="M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50"
                    ></path>
            </Spinner>
        </>
    )
}