import './App.css';
import {anagramData} from './Anagrams';
import {useEffect} from "react";
import saveResultInStorage from "./components/logic/AnagramStorage";
import {compareAnagrams} from "./components/logic/CompareAnagrams.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/menu/Header";
import AboutPage from "./pages/About";
import Home from "./pages/Home";
import GroupsPage from "./pages/Groups";
import ListPage from "./pages/List";


const App = () => {
  useEffect(() => {
    // Prepopulate some anagrams
    sessionStorage.clear();
    for (let i = 0; i < anagramData.length; i++) {
      const anagrams = anagramData[i];
      const result = compareAnagrams(anagrams.phrase1, anagrams.phrase2);
      saveResultInStorage(result);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<ListPage/>}/>
        <Route path="/groups" element={<GroupsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>

      <br/>
      <br/>
      <br/>
      <br/>
      <p>&copy;No Copyright.</p>
    </BrowserRouter>
  );
};
export default App;
