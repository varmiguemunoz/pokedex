import React from "react";
import { View } from "react-native";

import LoginForm from "../../components/auth/loginForm";
import UserData from "../../components/auth/userData";

export default function Account() {
  const Auth = null;

  return <View>{Auth ? <UserData /> : <LoginForm />}</View>;
}
