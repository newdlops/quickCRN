import { Platform } from 'react-native'

// export const serverUri = `https://api.quickc.co.kr`
export const normalUri = `http://localhost:3000`
// export const serverUri = `https://metal-rockets-run.loca.lt`
export const androidUri = `http://10.0.2.2:3000`

export const serverUri = Platform.OS == 'android' ? androidUri:normalUri
