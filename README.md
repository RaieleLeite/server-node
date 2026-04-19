# 💸 API de Transações (Node.js + Fastify)

Uma API REST para gerenciamento de transações financeiras, desenvolvida com **Node.js**, **Fastify** e **Knex**.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Fastify
* Knex.js
* SQLite (ambiente de desenvolvimento)
* Vitest
* Supertest
* Zod
* TypeScript

---

## 📦 Funcionalidades

* ✅ Criar uma nova transação
* ✅ Listar todas as transações de uma sessão
* ✅ Buscar uma transação específica
* ✅ Obter resumo (saldo total)
* ✅ Isolamento por sessão via cookies

---

## 🧪 Testes

Para rodar os testes:

```bash
npm test
```

Os testes utilizam:

* Vitest
* Supertest

---

## 🔗 Rotas da API

### Criar transação

```http
POST /transactions
```

```json
{
  "title": "Salário",
  "amount": 5000,
  "type": "credit"
}
```

---

### Listar transações

```http
GET /transactions
```

---

### Buscar transação por ID

```http
GET /transactions/:id
```

---

### Resumo

```http
GET /transactions/summary
```

---

## 🍪 Sessão

A API utiliza cookies para identificar o usuário:

* Um `sessionId` é criado automaticamente
* Cada usuário só acessa suas próprias transações

---

## 🧠 Regras de negócio

* `credit` → valor positivo
* `debit` → valor negativo
* Resumo = soma total das transações

---

## 📌 Observações

* Banco SQLite utilizado para desenvolvimento/testes
* Migrations controladas com Knex
* Validação de dados com Zod

