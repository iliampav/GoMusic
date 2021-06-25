Como rodar o projeto:

-- ao baixar o projeto, instale as dependências com yarn install 
-- ao executar crie um arquivo .env na pasta inicial do projeto (a mesma que se encontra o package.json)
-- no arquivo .env, adicione os seguintes codigos das chaves:
REACT_APP_YOUTUBE_API_KEY=AIzaSyCiLUaQuEw8Nw809GcHggT_vM3yat0gmSQ
REACT_APP_TICKET_MASTER_API_KEY=SHoe0U5Z7AI0rRmTp7TAWDuJetZYM8zG
-- apos copiado, rode o app com yarn dev

Desenvolvimento do projeto:

-- Para manter o projeto simples, utilizei o History do react-dom ao invés de utilizar o useReducer do React.js
-- Temos 2 arquivos de css principais, sendo o variable_css.js e global_css.js
- o Variable_css cria várias variáveis para posteriormente ser criado estilizações / temas no app
- o global_css cria a estilização padrão para todos os elementos
-- utilizei o wekpack para a criação de uma linguagem onde todos navegadores possam ler
-- Um proximo passo seria componentizar os icones das redes sociais

Versões do desenvolvimento

- Initial Structure

-- Criado a estutura basica para o app

- GoMusic V0.1

-- Criado o css da rota main para a busca pela banda / artista
-- Adicionado o react-router-dom

- GoMusic V0.2

-- Criado o useHistory(Ao invpes do useReducer) para passar dados de forma simples para a página de listagem
-- Criado o link entre as duas restApis (Youtube / TicketMaster)
-- Ambas já estão atualizando com os dados dos artistas

- GoMusic V0.3

-- Foi omitido as keys do app principal no arquivo .env
-- Adicionado a integração entre componentes filho > pai (Forma simplificada para nao utilizar o useReducer)
-- Adicionado os links das redes sociais
-- Adicionado a imagem principal
-- Adicionado a verificação da existencia de dados para o carregamento da página
-- Começado o layout dos videos do Youtube para serem expostos

- GoMusic V0.4

-- Terminado o layout da pagina que mostra os videos
-- adicionado uma window.open para abrir o link do video
-- Adicionado todas as informações para a página

- GoMusic V1.0

-- Organização do css
-- Algumas atualizações no css
-- Criado a verificação da existência das redes sociais
-- Criado o popUp para rodar os videos ao serem chamados
-- Fixado o header, com retorno ao topo da página ao ser feito uma nova pesquisa

- GoMusic V1.0.1

-- Adicionado um server node.js com express
-- App começou a rodar online no link: https://git.heroku.com/intergalaxy-gomusic.git