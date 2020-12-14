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
  titleIconContainer: {
    flexDirection: 'row',
  },
  statusCardsContainer: {
    flex: 3,
  },
  scrollViewContainer: {
    marginBottom: '3%',
  },
  footerContainer: {
    flex: 0.5,
    alignItems: 'center',
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
  card: {
    backgroundColor: COLORS.white,
    padding: '3%',
    marginTop: '2%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  updateText: {
    color: COLORS.white,
    marginTop: '2%',
  },
});

export default styles;
