import styled from 'styled-components';



export const Container = styled.div`
    width: 100%; 
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color:  #FFD700;

    border-radius: 8px;
    padding: 20px;

    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #0D0D0D;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`

