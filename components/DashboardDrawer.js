import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppDrawer from '../components/AppDrawer';
import DashboardStack from '../screens/Dashboard';
const drawer = createDrawerNavigator();

export default function DashboardDrawer() {
  return (
    <drawer.Navigator drawerContent={() => <AppDrawer />}>
      <drawer.Screen name='DashboardStack' component={DashboardStack} />
    </drawer.Navigator>
  );
}
