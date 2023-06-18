import { getColors } from 'react-native-image-colors'

export const getImagePosterColors = async (uri: string) =>{
    const colors = await getColors(uri, {});

    let primary;
    let secondary;

    if(colors.platform === "ios"){
        primary = colors.primary;
        secondary = colors.secondary;
    } else {
        primary = colors.vibrant;
        secondary = colors.dominant;
    }

    return [primary, secondary];
    
}