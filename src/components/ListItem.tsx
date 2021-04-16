import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Div, Icon, Text} from 'react-native-magnus';

type Props = {
  left?: JSX.Element;
  label: string;
  onPress?: () => void;
};

const ListItem: React.FC<Props> = ({left, label, onPress}) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Div
        row
        alignItems="center"
        bg="white"
        px={'lg'}
        py="lg"
        borderWidth={0.5}
        borderColor="#eee">
        {left && <Div mr={'xl'}>{left}</Div>}
        <Text fontSize="lg">{label}</Text>
        {onPress && (
          <Div ml="auto">
            <Icon name="arrow-right" fontFamily="SimpleLineIcons" />
          </Div>
        )}
      </Div>
    </TouchableOpacity>
  );
};

export default ListItem;
