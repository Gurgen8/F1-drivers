import React, {useEffect, useRef} from 'react';
import {FlatList, ListRenderItem, Text} from 'react-native';

import {ThemeProvider} from '../../components';
import {
  useAppDispatch,
  useAppSelector,
  getDriversListThunk,
  TDriverListItem,
} from '../../store';

import {styles} from './styles';
import {ListRow} from './list-row';
import {ListHeader} from './list-header';

let PER_PAGE = 15;

export const DriversListScreen = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.GetDriversList.data);
  const offset = useRef<number>(data?.data?.length || 0);

  useEffect(() => {
    if (!data?.data.length) {
      dispatch(getDriversListThunk(0))
        .unwrap()
        .then(() => {
          offset.current = PER_PAGE;
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const fetchData = () => {
    if (!data.data.length || Number(data?.total) <= data?.data?.length) {
      return;
    }

    dispatch(getDriversListThunk(offset.current))
      .unwrap()
      .then(() => {
        offset.current = offset.current + PER_PAGE;
      });
  };

  const renderItem: ListRenderItem<TDriverListItem> = ({item}) => (
    <ListRow itemData={item} />
  );

  return (
    <ThemeProvider>
      <Text style={styles.title}>F1 drivers list</Text>
      <ListHeader />
      <FlatList
        initialNumToRender={8}
        onEndReached={fetchData}
        renderItem={renderItem}
        data={data?.data}
        style={styles.list}
        keyExtractor={(item, index) => item['@_driverId'] + index}
      />
    </ThemeProvider>
  );
};
