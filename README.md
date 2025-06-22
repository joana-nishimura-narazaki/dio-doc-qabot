# Chatbot Interno de Q\&A

Aplicação **Angular** standalone que permite colar documentos e fazer perguntas sobre eles, com respostas geradas pela **Azure OpenAI**.

---

## 🚀 Começando

### Pré-requisitos

* **Node.js** (>=16)
* **Angular CLI**
* Conta e recurso **Azure OpenAI**

### Instalação

```bash
git clone https://github.com/SEU-USUARIO/dio-doc-qabot.git
cd dio-doc-qabot
npm install
```

### Configurar API

Edite `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  azureOpenAiEndpoint: 'https://<SEU-RESOURCE>.openai.azure.com',
  azureOpenAiKey: '<SUA_CHAVE_AQUI>'
};
```

> **Atenção:** não comite chaves de produção em repositórios públicos.

### Executar localmente

```bash
ng serve --open
```

---

## 📄 Estrutura de Pastas

```
src/
├── app/
│   ├── chat/
│   │   ├── chat.component.ts
│   │   ├── chat.component.html
│   │   └── chat.component.css
│   ├── services/ai-chat.service.ts
│   └── app.routes.ts
├── environments/environment.ts
└── main.ts
```

---

## 📝 Descrição do Desafio

* **Contexto:** Laboratório DIO & Avanade para aplicar conceitos de IA assistida por Copilot e Azure OpenAI.
* **Objetivos:**

  * Aplicar os conceitos em um ambiente prático.
  * Documentar processos técnicos de forma clara.
  * Utilizar GitHub para compartilhamento da documentação.



