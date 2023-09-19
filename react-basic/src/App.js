import './App.css';

function App() {
  return (
    <div className="main">

      <CustomComponent header={"Google Chrome"} element={"This google chrome"}/>
      <CustomComponent header={'Edge'} element={'This edge'}/>

    </div>
  );
}

function CustomComponent({header, element}){
  return (
      <article>
        <h1>{header}</h1>
        <p>{element}</p>
      </article>
  );
}

export default App;
