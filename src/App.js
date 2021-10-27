import './App.css';
import EzReactTable from 'ez-react-table';
function App() {
  return (
    <div className="App mt-5">
      <div className="container"> 
      <EzReactTable
          cols={[
            {
              title: "First",
              width: 150,
              key: "first",
            },
            {
              title: "Last",
              width: 150,
              key: "last",
            },{
              title:"class",
              width:150,
              key:"class"
            }
          ]}
          data={[
            { first: "Ram", last: "Kumar", class:12 },
            { first: "Reenu", last: "Strode", class: 11 },
            { first: "Anita", last: "Loomis", class:5 },
          ]}
        />
      </div>
      
      </div>
    
  );
}

export default App;
