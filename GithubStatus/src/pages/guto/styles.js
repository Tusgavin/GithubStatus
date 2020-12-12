import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  titleContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusCardsContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 45,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  pageSubtitle: {
    fontSize: 20,
    color: COLORS.white,
  },
});

export default styles;
