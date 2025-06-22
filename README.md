# Chatbot Interno de Q\&A

Aplicação **Angular** standalone que permite colar documentos e fazer perguntas sobre eles, com respostas geradas pela **Azure OpenAI**.

## Por que este projeto é útil para a empresa

- **Acesso instantâneo ao conhecimento**  
  Colaboradores recebem respostas contextuais sem precisar vasculhar wikis, planilhas ou pastas de rede.

- **Redução de sobrecarga no suporte**  
  Diminui o volume de dúvidas repetitivas enviadas ao time de infraestrutura ou produto, liberando-os para tarefas estratégicas.

- **Onboarding acelerado**  
  Novos membros aprendem processos e convenções de forma interativa e sem ler longos manuais.

- **Consistência e padronização**  
  Centraliza o conteúdo em um único ponto de verdade, evitando versões desatualizadas espalhadas por e-mails ou drives.

- **Escalabilidade e monitoramento**  
  Logs de consulta revelam tópicos frequentes de dúvida, permitindo ajustar a documentação e treinar melhor a equipe.

- **Arquitetura modular**  
  O Angular standalone facilita manutenção, reuso em outros sistemas internos e rollout incremental de novas funcionalidades.

- **Segurança e governança**  
  Executado na Azure dentro da rede corporativa, mantém compliance com políticas internas de dados.

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



