import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../../../types/StackNavigatorTypes/StackNavigatorTypes";

type ScreenProps = NativeStackScreenProps<RootStackParamlist, "SucessScreen">;

export function SucessScreen({ route }: ScreenProps) {
  function goBackToBegin() {}
  return (
    <Screen>
      <Icon {...route.params.icon} onPress={goBackToBegin} />
      <Text preset="headingLarge" marginTop="s24" color="grayBlack">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16" color="grayBlack">
        {" "}
        {route.params.description}
      </Text>

      <Button onPress={() => {}} title="Voltar ao inicio" marginTop="s40" />
    </Screen>
  );
}
