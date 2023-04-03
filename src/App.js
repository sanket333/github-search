import './App.css';
import { useEffect, useState } from 'react'
import { Octokit } from 'octokit'
import RepoCard from './components/RepoCard';
import Loading from './components/Loading';
import Blank from './components/Blank';
import Search from './components/Search';
import Sort from './components/Sort';

function App() {
  const octokit = new Octokit({});
  const [query, setQuery] = useState('');
  const [sortText, setSortText] = useState('');
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(false);


//Fetching the Github repo data
  const fetchData = () => {
    return new Promise(async (resolve, reject) => {
      setLoading(true);
      let res = await octokit.request('GET /search/repositories', {
        q: query,
        sort: sortText,
        per_page: 12
      })
      if (res) {
        setRepoList(res.data?.items);
        setLoading(false);
        resolve(true);
      }
      else {
        setLoading(false);
        reject(false)
      };
    })
  }
//Handling the Search bar texts
  const handleQueryChange = e => {
    setQuery(e.target.value)
  }
//Handling the Sort options
  const handleSortTextChange = e => {
    setSortText(e.target.value)
  }
//Reacting to search bar query changes
  useEffect(() => {
    let timer;
    if (query) {
      setLoading(true);
      timer = setTimeout(async () => {
        fetchData();
      }, 2000)
    }
    return () => clearTimeout(timer)
  }, [query])
//Reacting to sort options
  useEffect(() => {
    if (query && sortText) {
      setLoading(true);
      fetchData();
    }
  }, [sortText])

  return (
    <div className="App">
      <h1>Github Repository Search</h1>
      <Search query={query} handleChange={handleQueryChange} />
      <div >
        <Sort sortText={sortText} handleChange={handleSortTextChange} />
      </div>
      {loading ?
        <Loading /> :
        repoList.length === 0 ?
          <Blank /> :
          (<section className='cards'>
            {repoList && repoList.length > 0 && repoList.map((item) => (
              <RepoCard key={item.id} repo={item} />
            ))}
          </section>)}
    </div>
  );
}

export default App;
