import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: hp(2),
    borderRadius: 10,
    paddingHorizontal: wp(3),
    backgroundColor: Colors.white,
    marginVertical: hp(1),
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
    fontFamily: Fonts.PoppinsMedium,
    fontSize: hp(1.5),
    color: Colors.black,
  },
  companyName: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: hp(1.5),
    color: Colors.blue,
    marginTop: hp(0.5),
  },
  description: {
    fontFamily: Fonts.Inter,
    fontSize: hp(1.5),
    color: Colors.black,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 2,
    height: hp(2),
    backgroundColor: Colors.black,
    marginHorizontal: wp(1),
  },
});
