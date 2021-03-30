import React from 'react';

import { StyledButton, StyledText} from './styles';

export default function Button({text, onPress}) {
    return (
        <StyledButton onPress={onPress}>
            <StyledText>{text}</StyledText>
        </StyledButton>
    )
}