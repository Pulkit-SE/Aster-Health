import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 24,
    padding: 14,
  },
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  imgStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  imgContainer: {
    marginVertical: 12,
  },
  imgProps: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 22,
    paddingRight: 16,
  },
  releasing: {
    marginTop: 12,
    flexDirection: 'row',
  },
  font: {
    fontWeight: '600',
  },
});
