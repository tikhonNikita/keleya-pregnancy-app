import React, { forwardRef } from "react";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
} from "react-native";

import { colors } from "../../theme";

type Props = TextInputProps & {
  errorMessage?: string;
};

export const BaseTextInput = forwardRef<TextInput, Props>(
  ({ errorMessage, ...props }, ref) => {
    
    const isValid = !errorMessage;
    const borderColor = isValid ? colors.WARM_GREY : colors.BUBBLE_GUM;

    return (
      <View style={styles.container}>
        <TextInput
          ref={ref}
          style={[styles.input, { borderColor }]}
          placeholderTextColor={colors.WARM_GREY}
          {...props}
        />
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "80%",
  },
  input: {
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: colors.WARM_GREY,
    paddingLeft: 20,
    fontSize: 20,
    height: 45,
  },
  error: {
    paddingLeft: 20,
    color: colors.BUBBLE_GUM,
    fontSize: 14,
  },
});
