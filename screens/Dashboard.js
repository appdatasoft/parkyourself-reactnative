import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuButton from '../components/MenuButton';
import Filter from '../components/Filter';
import HeaderLogo from '../components/HeaderLogo';

const Stack = createStackNavigator();

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  );
}

export default function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name='Dashboard Screen'
        component={Dashboard}
        options={({ navigation }) => ({
          //   headerStyle: {
          //     // paddingHorizontal: 10,
          //   },
          headerLeft: () => <MenuButton navigation={navigation} />,
          headerTitle: () => <HeaderLogo />,
          headerRight: () => <Filter />,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#999',
  },
});
