// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Drawer } from 'expo-router/drawer';
// import { Text, View } from 'react-native';
// import { Colors } from '../../constants/Colors';

// export default function Layout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer>
//         <Drawer.Screen
//           name="index" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Home',
//             title: '@ccurate odds',
//             headerStyle:{
//               backgroundColor: Colors.appColor,              
//             },
//             headerLeft: null,
//             headerRight: null,
//             headerTitle: '@ccurate odds',
//             headerTitleAlign: 'center',
//           }}
//         />
//         <Drawer.Screen
//           name="views/TwoOdd" // This is the name of the page and must match the url from root
//           options={{
//             // headerShown: false,
//             drawerLabel: 'Two Odds',
//             title: 'Daily Two-Sure Odds',
//           }}
//         />
//         <Drawer.Screen
//           name="views/ThreeOdd" // This is the name of the page and must match the url from root
//           options={{
//             // headerShown: false,
//             drawerLabel: 'Three Odds',
//             title: 'Three-Sure Odds',
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }
