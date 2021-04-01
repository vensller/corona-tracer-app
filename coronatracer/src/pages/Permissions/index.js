import React from 'react';
import { Marker } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { StyledMap, StyledInput, StyledSearchView, StyledButton } from './styles';

export default function Permissions() {
    const [currentRegion, setCurrentRegion] = React.useState();
    const [manualLocation, setManualLocation] = React.useState();
    
    React.useEffect(() => {
        async function loadInitialPosition(){                
            setCurrentRegion({
                latitude: -26.93153,
                longitude: -49.2334694,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04 
            });            
        }

        loadInitialPosition();
    }, []);

    function handleRegionChange(region){
        setCurrentRegion(region);
    }

    function loadMap() {
        //Fazer depois        
    }
    
    return (
        <>
            <StyledMap 
                onRegionChange={handleRegionChange}
                initialRegion={currentRegion}                 
            >                
                <Marker 
                    key={1}
                    coordinate={{                    
                        latitude: currentRegion?.latitude,
                        longitude: currentRegion?.longitude
                    }}
                />       
            </StyledMap>  
            <StyledSearchView>
                <StyledInput                    
                    placeholder="Buscar por endereço"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={manualLocation}
                    onChangeText={setManualLocation}
                />

                <StyledButton 
                    onPress={loadMap}
                >
                    <MaterialIcons 
                        name="my-location" 
                        size={20} 
                        color="#FFF"
                    />
                </StyledButton>
            </StyledSearchView> 
        </>      
    )
}

Permissions.navigationOptions = () => ({
    headerTitle: '',    
})