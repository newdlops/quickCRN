import { Platform } from 'react-native'

export const serverUri =
  Platform.OS == 'android' ? `http://10.0.2.2:3000` : `http://localhost:3000`
// export const serverUri = `http://10.0.2.2:3000`
