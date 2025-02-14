# SoftPet

Sistema de gerenciamento para petshops, permitindo o cadastro e acompanhamento de pets e seus donos.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Docker e Docker Compose
- Node.js (versão 18 ou superior)
- npm ou yarn

### Configuração Inicial

1. Clone o repositório:
```bash
git clone https://github.com/4lvarofilho/SoftPet.git
cd softpet
```

2. Inicie os containers Docker (backend e banco de dados):
```bash
docker compose up --build
```

3. Em um novo terminal, acesse o diretório do frontend:
```bash
cd frontend
npm install
npm run dev
```

4. Acesse a aplicação:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Documentação API (Swagger): http://localhost:3001/api/docs

## 📁 Estrutura do Projeto

```
softpet/
├── frontend/          # Aplicação Next.js
├── backend/           # API NestJS
├── docker-compose.yml # Configuração Docker
└── README.md
```

## 🔧 Tecnologias Utilizadas

### Backend
- NestJS
- TypeORM
- PostgreSQL
- Swagger
- Docker

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

## 📌 Funcionalidades

- Cadastro de pets
- Edição de informações
- Listagem de pets cadastrados
- Remoção de registros
- Filtro por tipo de animal (cão/gato)

## 🔍 Endpoints da API

### Pets

- `GET /api/pets` - Lista todos os pets
- `GET /api/pets/:id` - Busca um pet específico
- `POST /api/pets` - Cadastra novo pet
- `PATCH /api/pets/:id` - Atualiza informações do pet
- `DELETE /api/pets/:id` - Remove um pet

## 🔐 Variáveis de Ambiente

### Backend (.env)
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=softpet
DB_PASSWORD=postgres
DB_DATABASE=softpet
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```