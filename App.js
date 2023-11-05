import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {
  MD3LightTheme,
  configureFonts,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme
} from '@react-navigation/native';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SCREENS } from './src/view-layer/navigation';
import { moderateScale } from './src/view-layer/utils/scaling';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-toast-notifications'
import { ArticleProvider } from './src/view-layer/contexts/ArticleContext';

const SCREEN_NAMES = Object.keys(SCREENS);

const Stack = createStackNavigator();

const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f4f5f9'
  }
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Exo': require('./assets/fonts/Exo-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Providers>
      <StatusBar style="auto" />
      <NavigationContainer theme={NavTheme}>
        <Stack.Navigator>
          {SCREEN_NAMES.map((name) => (
            <Stack.Screen
              key={name}
              name={name}
              options={{
                headerShown: false,
              }}
              getComponent={() => SCREENS[name].component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}

const fontConfig = {
  displayLarge: {
    fontFamily: 'Exo',
    fontWeight: '600',
    fontSize: moderateScale(32),
  },
  displayMedium: {
    fontFamily: 'Exo',
    fontWeight: '600',
    fontSize: moderateScale(25),
  },
  displaySmall: {
    fontFamily: 'Exo',
    fontWeight: '600',
    fontSize: moderateScale(20),
  },
  headlineLarge: {
    fontFamily: 'Exo',
    fontWeight: '500',
    fontSize: moderateScale(32),
  },
  headlineMedium: {
    fontFamily: 'Exo',
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  headlineSmall: {
    fontFamily: 'Exo',
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
}

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#5667FD',
    secondary: '#636D77',
    tertiary: '#364356',
  },
  fonts: configureFonts({ config: fontConfig, isV3: true }),
}

const Providers = ({ children }) => {
  return (
    <ArticleProvider>
      <PaperProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <>{children}</>
          </ToastProvider>
        </ThemeProvider>
      </PaperProvider>
    </ArticleProvider>
  );
};