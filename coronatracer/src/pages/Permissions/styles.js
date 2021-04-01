import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const StyledMap = styled(MapView)`
    flex: 1%;
`;

export const StyledInput = styled.TextInput`
    flex: 1;
    height: 50px;
    background-color: #FFF;
    color: #333;
    border-radius: 25px;
    padding: 0 20px;
    font-size: 16px;
`;

export const StyledSearchView = styled.View`
    position: absolute;
    top: 20px;
    left: 40px;
    right: 20px;
    z-index: 5;
    flex-direction: row;
`;

export const StyledButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: #079D49;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`;