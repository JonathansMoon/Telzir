echo Entrando na pasta backend
cd backend

echo Entrando na pasta backend
sudo docker-compose up -d

echo Executando run.sh
sudo chmod +x ./run.sh
sudo ./run.sh

echo Entrando na pasta mobile
cd .. && cd mobile

echo instalando dependências
yarn

echo Entrando na pasta frontend
cd .. && cd frontend

echo instalando dependências
yarn

echo startando o projeto
yarn start