import React, {useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({ data }) => {
  // 입력값과 일치하는 아이템 요소들을 보여주는 배열
  const [filterData, setFilterData] = useState([]);
  // 인풋 태그에 실제 입력된 문자열 데이터 값을 보여준다.
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord =  e.target.value;
    setWordEntered(searchWord)
    const newFilter = data.filter((value)=>{
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    // 유저가 인풋 창에 입력했다가 지운 경우 필터창도 지우기 위해서 해당 if 문 사용
    if(searchWord === "") {
      setFilterData([]);
    }else{
      setFilterData(newFilter);
    }
  }

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  }
  

  return (
    <Search>
      <SearchInput>
        {/*  인풋 태그에 변화 있을 때, 즉 입력이 있을 때 마다 handleFilter 함수가 실행됨 */}
        <input type="text" placeholder="Enter a product name..." onChange={handleFilter} value={wordEntered} /> 
        {/* 유저가 인풋 창에 데이터를 입력했다가 한꺼번에 지우고 싶은 경우를 대비해서 X 버튼을 만들어 놓음 */}
        {filterData.length === 0 ?  <SearchIcon className='icon' /> : <CloseIcon className='icon' onClick={clearInput} />}
      </SearchInput>
      {/* 유저가 실제 데이터를 입력하기 전에는 필터 창이 등장하지 않아야 함. */}
      {
        filterData.length !== 0 && (
          <DataResult>
            {filterData.slice(0, 15).map((product, key)=>{
              return(
                <a key={key} className='dataItem' href={product.image} target="_blank">
                  <p>{product.title}</p>
                </a>
              )
            })}
          </DataResult>
        )
      }
    </Search>
  );
};

export default SearchBar

const Search = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.div`
  margin-top: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 400px;
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
  width: 396px;
  height: 200px;
  background-color: #fff;
  box-shadow: rgba(0,0,0,.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  margin-top: 5px;
  border-radius: 5px;

  .dataItem{
    padding: 0 10px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .dataItem:hover{
    background-color: gray;
    color: #fff;
  }
`;
