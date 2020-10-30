import React from "react";
import { View, Text } from "react-native";
import UneAction from "./UneAction";

const ListeActions = ({ actions }) => {
  return (
    <View>
      {actions.map((action, id) => (
        <UneAction key={id} action={action} />
      ))}
    </View>
  );
};

export default ListeActions;
