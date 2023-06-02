import { useState } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

type InputProps = TextInputProps & { label?: string }

export function Input({ label, ...props }: InputProps) {
  const [isFocused, setFocus] = useState(false);

  return (
    <View>
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
      />
    </View>
  );
};

