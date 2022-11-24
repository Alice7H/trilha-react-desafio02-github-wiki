import { useState } from 'react';
import { Input } from '../../components/Input';
import { ItemRepo } from '../../components/ItemRepo';
import { Button } from '../../components/Button';
import { Container } from './styles';
import { api } from '../../services/api';
import gitLogo from '../../assets/github.png'

const App = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      setRepos(prev => [...prev, data]);
      setCurrentRepo('');
      return;
    }
  }

  const handleRemoveRepo = (id) => {
    const filteredRepo = repos.filter(repo => repo.id !== id);
    setRepos(filteredRepo);
  }

  return (
    <Container>
      <img src={gitLogo} alt="github logo" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {
        repos && repos.map(repo =>
          <ItemRepo repo={repo} key={repo.id} handleRemoveRepo={handleRemoveRepo} />
        )
      }
    </Container>
  );
}

export default App;
