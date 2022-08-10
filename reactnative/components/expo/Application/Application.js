import { View, Text } from 'react-native'
import React from 'react'
import * as Application from 'expo-application';

const ApplicationF = () => {

    const getData = async () => {
        const InstallReffererAPI = await Application.getInstallReferrerAsync();
        const InstallationTimeAPI = await Application.getInstallationTimeAsync();
        const LastUpdateTimeAPI = await Application.getLastUpdateTimeAsync();

        console.log(InstallReffererAPI)
        console.log(InstallationTimeAPI)
        console.log(LastUpdateTimeAPI)
    }

    

    getData();

  return (
    <View>
      <Text>{Application.androidId}</Text>
      <Text>{Application.applicationId}</Text>
      <Text>{Application.applicationName}</Text>
      <Text>{Application.nativeApplicationVersion}</Text>
      <Text>{Application.nativeBuildVersion}</Text>


    </View>
  )
}

export default ApplicationF