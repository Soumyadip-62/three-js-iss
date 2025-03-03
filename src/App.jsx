import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import AboutsISS from './Sections/AboutsISS';
import Missions from './Sections/Missions';
import AboutTeam from './Sections/AboutTeam';

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
function App() {
  const [isDark, changeTheme] = useState(defaultTheme);

  useEffect(()=>{
    if(isDark){
      document.body.style.backgroundColor = "#0a1929";
      document.body.style.color = "#d8dee9";
    }else{
      document.body.style.backgroundColor = "#F8F8FA";
      document.body.style.color = "#0a1929";
    }
  },[isDark]);

  return (
    <div className="App">
      <Navbar isDark={isDark} themeUpdate={changeTheme} default={defaultTheme}/>
      <div id="google_translate_element" style={{float: 'right', margin: "5px"}}></div>
      <div style={{margin: 'auto', textAlign: 'justify', padding: '25px'}}>
          <AboutsISS isDark={isDark}/>
          <Missions isDark={isDark}/>
          <AboutTeam isDark={isDark}/>
      </div>
    </div>
  )
}

export default App
