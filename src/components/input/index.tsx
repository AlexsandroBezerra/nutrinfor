import { forwardRef, useState, LegacyRef } from 'react';
import { Text, TextInput, TextInputProps, View, ViewStyle, StyleProp } from 'react-native';

import { styles } from './styles';

type InputProps = TextInputProps & { label?: string, containerStyle?: StyleProp<ViewStyle> }

function InputComponent({ label, ...props }: InputProps, ref: LegacyRef<TextInput>) {
  const [isFocused, setFocus] = useState(false);

  return (
    <View style={props.containerStyle}>
      {label && <Text style={styles.labelText}>{label}</Text>}

      <TextInput
        {...props}
        style={[
          styles.input,
          isFocused && styles.inputFocusState,
          props.style
        ]}
        onFocus={(event) => {
          setFocus(true)
          props.onFocus && props.onFocus(event)
        }}
        onBlur={(event) => {
          setFocus(false)
          props.onBlur && props.onBlur(event)
        }}
        ref={ref}
      />
    </View>
  );
};

export const Input = forwardRef(InputComponent)
