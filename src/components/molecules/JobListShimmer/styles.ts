import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    paddingVertical: hp(2),
    borderRadius: 10,
    paddingHorizontal: wp(3),
    backgroundColor: Colors.white,
    marginVertical: hp(1),
  },
  content: {
    flexDirection: 'row',
  },
  image: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15) / 2,
  },
  containerContent: {
    width: wp(65),
    marginLeft: wp(3),
  },
  title: {
    width: wp(40),
    height: hp(1.5),
    borderRadius: 10,
  },
  companyName: {
    width: wp(25),
    height: hp(1.5),
    borderRadius: 10,
    marginTop: hp(2),
  },
  description: {
    width: wp(30),
    height: hp(1.5),
    borderRadius: 10,
    marginTop: hp(1.5),
  },
  role: {
    width: wp(28),
    height: hp(1.5),
    borderRadius: 10,
    marginTop: hp(1.5),
  },
});
