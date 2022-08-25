import logo from './logo.svg';
import './App.css';
import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { decrementAction, incrementAction } from './store/actions/counterActions';
import { addGuestAction } from './store/actions/guestsActions';
import { useCallback, useEffect, useState } from 'react';
import { weatherCurrentUpdateAction, weatherUpdateAction } from './store/actions/weatherActions';
import { listMutationCallback } from './services/ages.service';
import { WEATHER_CURRENT_UPDATE } from './store/actions';



function App(props) {
  const [newId, setNewId] = useState('');

  const counter = useSelector(state => state.counter);
  const agesList = useSelector(state => state.ages);
  const weatherCurrent = useSelector(state => state.weather.current)

  const x = useSelector(state => state.x);
  const dispatch = useDispatch();

  const store = useStore();

  // console.log(store);
  // console.log(store.getState());
  // store.dispatch()

  useEffect(() => {
    // store.subscribe((...args) => {
    //   console.log('store updated', args, store.getState())
    // });
    
    setTimeout(() => {
      console.log();
      dispatch(weatherCurrentUpdateAction({ x: 10, temp: 27, time: Date.now() }))

      // dispatch({
      //   type: WEATHER_CURRENT_UPDATE,
      //   payload: {}
      // })

    }, 3000)


    // fetch()
    //   .then(resp => resp.json)
    //   .then(weather => props.updateWeather(weather))
    // setTimeout(() => {
    //   props.updateWeather({
    //     temp: 28,
    //     time: Date.now()
    //   })
    // }, 3000)
  }, [])

  const onListMutate = useCallback(listMutationCallback(store), [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        {/* { hey redux store, give me some value! } */}
        {String(counter)}
        <br />
        {String(x)}
        <button onClick={() => dispatch(incrementAction)}>Increment</button>
        <button onClick={() => dispatch(decrementAction)}>Decrement</button>
        <button onClick={() => dispatch({ type: 'x/pow2' })}>Pow 2</button>

        <hr />
          {agesList.join(',')}
        <hr />

        <button onClick={onListMutate}>List add Age and remove first</button>

        <br />

        {JSON.stringify(weatherCurrent)}

        {/* <div></div>
        <ul>
          {props.guests.list.map((g, index) => <li key={`${g.id}-${index}`}>{g.id}</li>)}
        </ul>
        <input type="text" onChange={(event) => setNewId(event.target.value)} value={newId} /> 
        <button onClick={() => props.addGuest({ id: newId })}>Add guest</button>
        <hr />
        {String(JSON.stringify(props.weather.current))} */}
      </header>
    </div>
  );
}

// Values from Store will be added to props.

// const mapStateToProps = state => ({
//   ...state
// });

// const mapDispatchToProps = dispatch => ({
//   incrementValue: () => dispatch(incrementAction),
//   decrementValue: () => dispatch(decrementAction),
//   addGuest: (payload) => dispatch(addGuestAction(payload)),
//   updateWeather: (payload) => dispatch(weatherUpdateAction(payload)),
//   pow2: () => dispatch({ type: 'x/pow2' })
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
