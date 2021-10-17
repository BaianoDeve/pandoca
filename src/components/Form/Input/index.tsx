import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Icon>['name'];
  validator?: (input: string) => boolean;
  onClickIcon?: () => void;
};

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

export const Input = ({
  icon,
  validator,
  onClickIcon,
  ...props
}: InputProps) => {
  const [state, setState] = useState<InputState>(Pristine);
  const [input, setInput] = useState('');

  const {
    colors: { success, placeholder, alert },
  } = useTheme();

  const color =
    state === Pristine ? placeholder : state === Valid ? success : alert;

  function handleValidate() {
    const valid = validator(input);
    setState(valid);
  }

  function handleChangedInput(text: string) {
    setInput(text);
    if (state !== Pristine) {
      handleValidate();
    }
  }

  return (
    <S.InputGroup style={{ borderColor: color }}>
      <S.IconBox onPress={onClickIcon}>
        <Icon name={icon} color={color} size={20} />
      </S.IconBox>
      <S.InputField
        underlineColorAndroid="transparent"
        placeholderTextColor={placeholder}
        onBlur={handleValidate}
        onChangeText={handleChangedInput}
        {...props}
      />
      {(state === Valid || state === Invalid) && (
        <S.Box style={{ backgroundColor: state === Valid ? success : alert }}>
          <Icon
            name={state === Valid ? 'check' : 'x'}
            size={16}
            color="white"
          />
        </S.Box>
      )}
    </S.InputGroup>
  );
};
