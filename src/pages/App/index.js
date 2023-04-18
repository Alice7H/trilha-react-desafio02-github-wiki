import { useState } from 'react';
import { InputLabel, ItemRepo, Button, Image } from '../../components';
import { Container } from './styles';
import { api } from '../../services/api';
import gitLogo from '../../assets/github.png'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      setRepos(prev => [...prev, data]);
      setCurrentRepo('');
    } catch (error) {
      toast.error('Requisição não encontrada');
    }
  }

  const handleRemoveRepo = (id) => {
    const filteredRepo = repos.filter(repo => repo.id !== id);
    setRepos(filteredRepo);
  }

  return (
    <Container>
      <Image src={gitLogo} alt="github logo" />
      <Toaster position="top-center" />
      <InputLabel
        value={currentRepo}
        id='input'
        onChange={(e) => setCurrentRepo(e.target.value)}
        placeholder="nome-usuário/nome-repositório"
        labelText="Informe o nome do usuário e repositório:"
      />
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
