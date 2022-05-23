import GoalAdder from "./components/goalAdder";
import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  
  return (
    <>
    <StatusBar style="light" />
   <GoalAdder />
   </>
  );
}


