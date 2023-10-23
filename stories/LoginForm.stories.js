import React from "react";
import { View } from "react-native";
import { LoginForm } from "../LoginForm";

const LoginFormMeta = {
  title: "LoginForm",
  component: LoginForm,
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default LoginFormMeta;

export const Basic = {};
