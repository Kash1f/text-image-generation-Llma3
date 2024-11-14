import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import MetaAILogo from '../assets/logo_s.jpeg';
  import CustomText from './CustomText';
  
  const CustomHeader = () => {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'rgba(20,45,46,1)'}
        />
  
        <View style={styles.subContainer}>
          <TouchableOpacity>
            <Text
              style={{
                height: 2,
                backgroundColor: 'white',
                marginBottom: 4,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                height: 2,
                backgroundColor: 'white',
                marginBottom: 4,
                marginRight: 20,
              }}
            />
            <Text
              style={{
                height: 2,
                backgroundColor: 'white',
                marginBottom: 4,
                marginRight: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.flexRow}>
          <Image source={MetaAILogo} style={styles.logo} />
          <View>
          <CustomText>
              Meta AI
          </CustomText>
          <CustomText fontWeight='normal' opacity={0.7}> 
              with Llma3
          </CustomText>
  
              <View style={{position:'absolute', left:200}}>
              <TouchableOpacity>
          <CustomText fontWeight='normal'> 
              Clear
          </CustomText>
          </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default CustomHeader;
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'center',
      backgroundColor: 'rgba(20,45,46,1)',
      borderBottomWidth: 0.18,
      borderBottomColor: 'rgba(62,62,63,1)',
    },
    subContainer: {
      position: 'absolute',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
      left: 10,
      top: 20,
    },
  
    logo: {
      position: 'absolute',
      width: 38,
      height: 38,
      borderRadius: 40,
      left:100
    },
  
    flexRow: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
    },
  });
  