import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;    
    padding: 10px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const WelcomeText = styled.Text`
    font-size: 26px;
    color: #006747;
    font-weight: bold;
`;

export const WelcomeDesc = styled.Text`
    margin: 15px 0;
    text-align: center;
    font-size: 14px;
    color: #707070;
`;