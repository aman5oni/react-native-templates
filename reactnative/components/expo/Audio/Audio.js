import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

const AudioF = () => {
  const [sound, setSound] = React.useState();

  const playSound = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/kesariya.mp3")
    );
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  };

  const pauseSound = async () => {
    console.log("Lemme Pausing Your Sound");
    await Audio.Sound.pauseSound();
}

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Pause Sound" onPress={pauseSound} />
      <Button title="Resume Sound"  />
    </View>
  );
};

export default AudioF;
