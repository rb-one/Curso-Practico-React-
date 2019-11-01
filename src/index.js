import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

// render  recibe dos parametros:
// 1.- el componente <HelloWorld />
// 2.- donde empujo el compone+nte
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
