import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase =  styled.div`
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 650px;

    h1 {
        font-family: 'Itim', cursive;
        text-align: center;
        position: relative;
        padding: 1rem;
        font-size: 1.5rem;

        &::before {
            content: open-quote;
            font-size: 6rem;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }

        &::after {
            content: close-quote;
            font-size: 6rem;
            position: absolute;
            right: -1rem;
        }
        @media (max-width: 767.98px){
            font-size: 1.3rem;

            &::before,
            &::after {
                font-size: 4rem;
            }
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight: bold;
        text-align: left;
        color: #666;
    }
`;

const Frase = ({frase}) => {

    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContenedorFrase>   
    );
}
 
export default Frase;