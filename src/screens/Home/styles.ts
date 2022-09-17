import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light_grey,
    padding: wp(5),
  },
  text: {
    color: Colors.black,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 12,
  },
});

export default styles;
