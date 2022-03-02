import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placehoder, data }) => {
  return (
    <Search>
      <SearchInput>
        <input type="text" placeholder={placehoder} />
        <SearchIcon className='icon' />
      </SearchInput>
      <DataResult>
        {data.map((product, key)=>{
          return(
            <a className='title' href={product.image} target="_blank">
              <p>{product.title}</p>
            </a>
          )
        })}
      </DataResult>
    </Search>
  );
};

export default SearchBar

const Search = styled.div`
  width: 600px;
  background-color: lightgray;
  border-radius: 10px;
  margin: 0 auto;
`;

const SearchInput = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 300px;
  height: 30px;
  padding: 20px;

  input{
    border: none;
  }
  input:focus{
    outline: none;
  }

  .icon{
    cursor: pointer;
  }
`;

const DataResult = styled.div`
  .title{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;
