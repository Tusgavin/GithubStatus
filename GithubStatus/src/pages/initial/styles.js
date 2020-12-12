import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialPageTitle: {
    color: COLORS.white,
    fontSize: 50,
    fontWeight: 'bold',
  },
  initialPageDescription: {
    color: COLORS.white,
    fontSize: 25,
    marginRight: '10%',
    marginLeft: '10%',
    textAlign: 'center',
    marginTop: '5%',
    padding: '2%',
  },
  gutoButton: {
    width: '35%',
    marginRight: '10%',
  },
  nutkaButton: {
    width: '35%',
  },
  titleIcon: {
    marginTop: '6%',
  },
});

export default styles;
