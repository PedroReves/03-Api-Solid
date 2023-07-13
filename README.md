# App

Um aplicativo no estilo do aplicativo já existente "GymPass"

# Description

Um app em que o usuário possa frequentar as academias que estão cadastradas no site, e as academias que estão perto de sua casa, pagando apenas por um plano, seja ele Bronze, Prata ou Ouro, e cada tipo de plano libera mais academias, entre outras coisas.

# RFs

- [x] Deve ser possível se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuário logado
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [x] Deve ser possível o usuário obter o seu histórico de check-ins
- [x] Deve ser possível o usuário buscar por academias próximas ( até 10km )
- [x] Deve ser possível o usuário buscar academias pelo nome
- [x] Deve ser possível o usuário realizar o check-in em uma academia ( Função Principal )
- [x] Deve ser possível validar o check-in de um usuário
- [x] Deve ser possível cadastrar uma academia

    
# RNs

- [x] O usuário não pode se cadastrar com um email duplicado
- [x] O usuário não pode fazer dois check-ins no dia 
- [x] O usuário não pode fazer check-in se não estiver perto ( 100ms ) da academia
- [x] O check-in só pode ser validado até 20 minutos após criado
- [x] A academia só pode ser validado por administradores
- [x] o check-in só pode ser validado por administradores

# RNFs 

- [x] A senha do meu usuário precisa estar criptografada
- [x] Os dados da aplicação serão armazenados em um banco de dados PostgreSQL
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página
- [x] O usuário deve ser identificado por um JWT ( JSON Web Token )