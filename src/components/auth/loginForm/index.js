import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Escribe un email valido")
      .required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <TextInput
              placeholder="Nombre de usuario"
              style={styles.input}
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <TextInput
              placeholder="Contraseña"
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              value={values.password}
              onChangeText={handleChange("password")}
            />

            <ErrorMessage name="email">
              {(msg) => <Text style={styles.error}>{msg}</Text>}
            </ErrorMessage>

            <Button title="Iniciar Sesion" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
}

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
