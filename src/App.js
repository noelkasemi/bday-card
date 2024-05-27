// App.js
import React from 'react';
import Card from './Card';
import './styles.css';
import SecondSection from './secondSection';
import Text from './text';

export default function App() {
  return (
    <div className="App">
      <Text style={`italic text-white ml-10 mb-2`}/>
      <Card />
      <SecondSection />
    </div>
  );
}
