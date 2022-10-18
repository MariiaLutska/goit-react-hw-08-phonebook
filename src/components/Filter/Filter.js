// import React from 'react';
import { Input, FormLabel } from '@chakra-ui/react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from '../../redux/filtersSlice';
// import { selectFilter } from '../../redux/contacts/selectors';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const value = useSelector(selectFilter);

//   const onChange = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <FormLabel>
//       Find contacts by name
//       <Input
//         variant="filled"
//         label="Find contacts by name"
//         type="text"
//         value={value}
//         name="filter"
//         onChange={onChange}
//       />
//     </FormLabel>
//   );
// };

// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from '../../redux/filtersSlice';
// import { selectFilter } from '../../redux/contacts/selectors';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const value = useSelector(selectFilter);

//   const onChange = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <FormLabel>
//       Find contacts by name
//       <Input type="text" value={value} onChange={onChange} />
//     </FormLabel>
//   );
// };

import { Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get('filter') ?? '';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(filterValue));
  }, [dispatch, filterValue]);

  const handleFilter = e => {
    const value = e.currentTarget.value.trim();
    setSearchParams(value ? { filter: value } : {});
  };

  return (
    <Box display="flex" flexDirection="column" gridGap={2} mb={4}>
      <FormLabel>Find contacts by name</FormLabel>
      <Input
        type="text"
        name="filter"
        onChange={handleFilter}
        defaultValue={filterValue}
      />
    </Box>
  );
}
