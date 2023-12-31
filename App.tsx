import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import HomeScreen from '@/screens/Home';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Settings} from '@/screens/Settings';

import {RootStackParamList} from '@/store/NavigationType';
import {Detail} from '@/screens/Detail';
import {More} from '@/screens/More';
import {RecoilRoot} from 'recoil';

library.add(fas);

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              initialParams={{theme: 'Wakgood'}}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="More"
              component={More}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
