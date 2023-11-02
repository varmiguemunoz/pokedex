import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.userName}
        onChangeText={(text) => formik.setFieldValue("userName", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Iniciar Sesion" onPress={formik.handleSubmit} />

      <Text style={styles.error}>{formik.errors.userName}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  );
}

const initialValues = () => {
  return {
    userName: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    userName: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
});
