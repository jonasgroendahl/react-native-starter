import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

const useKeyboard = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKeyboardShow = () => setVisible(true);

    const handleKeyboardHide = () => setVisible(false);

    Keyboard.addListener('keyboardWillShow', handleKeyboardShow);
    Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

    return () => {
      Keyboard.removeListener('keyboardWillShow', handleKeyboardShow);
      Keyboard.removeListener('keyboardDidHide', handleKeyboardHide);
    };
  }, [setVisible]);

  return {visible};
};

export default useKeyboard;
