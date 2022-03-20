import * as React from 'react';
import Container from '@mui/material/Container';
import CustomSearch from '../Components/CustomSearch'
import SearchInput from '../Components/SearchInput'

const Home = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <SearchInput />
      {/* <CustomSearch /> */}
    </Container>
  );
}
export default Home;