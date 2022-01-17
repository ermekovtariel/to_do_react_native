import { StyleSheet } from 'react-native';

let blueColor = '#558CF6';
let backgrounItems = '#fff';
let borderColor = '#C0C0C0';
export const app = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 30,
    height: '80%',
  },
  writeText: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingLeft: 15,
    paddingHorizontal: 15,
    backgroundColor: backgrounItems,
    width: 250,
    borderRadius: 60,
    borderColor,
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: backgrounItems,
    borderColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},
});

export const task = StyleSheet.create({
  item: {
    backgroundColor: backgrounItems,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: blueColor,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: blueColor,
    borderWidth: 2,
    borderRadius: 5,
  },
});
