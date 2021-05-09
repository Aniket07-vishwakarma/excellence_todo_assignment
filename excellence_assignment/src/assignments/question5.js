import * as React from 'react';

const obj = [
  {"id" : 4, "name" : "abc"},
  {"id" : 10, "name" : "ab2"},
  {"id" : 5, "name" : "abc3"},
  {"id" : 6, "name" : "abc5"}
];  
export default function Q5() {
  const sortObj = obj.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
  return (
    <div className="App">
      <header className="App-header">
      {sortObj.map(sortObj => (
        <div key={sortObj.id} style={{ margin: '30px' }}>
          <div>{`id: ${sortObj.id}`}</div>
          <div>{`name: ${sortObj.name}`}</div>                
        </div>
      ))}
      </header>
    </div>
  );
}

