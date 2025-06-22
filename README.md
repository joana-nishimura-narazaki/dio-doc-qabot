# Chatbot Interno de Q\&A

Aplicação **Angular** standalone que permite colar documentos e fazer perguntas sobre eles, com respostas geradas pela **Azure OpenAI**.

Esse tipo de chatbot interno traz vários ganhos práticos para uma organização:

Acesso Instantâneo ao Conhecimento
Em vez de caçar planilhas, wikis ou pastas de rede, qualquer colaborador cola um trecho de documentação e recebe a resposta contextualizada na hora.

Redução de Sobrecarga de Suporte
Diminui o volume de perguntas repetitivas ao time de infraestrutura ou ao suporte de produto, liberando esses especialistas para tarefas mais estratégicas.

Onboarding Acelerado
Novos membros aprendem processos, convenções e detalhes técnicos de forma interativa, sem precisar passar horas lendo guias ou pedindo ajuda.

Consistência e Padronização
Como todas as respostas vêm de uma única fonte integrada, evita-se a “versão desatualizada” de documentos espalhados por e-mails ou drives.

Escalabilidade e Monitoramento
Com logs de consulta, você identifica quais tópicos geram mais dúvidas e ajusta a documentação ou treina melhor a equipe.

Arquitetura Modular
A abordagem standalone do Angular facilita a manutenção, o reuso em outros sistemas internos e o rollout incremental de novas funcionalidades.

Segurança e Confiabilidade
Rodando sobre Azure OpenAI dentro da rede corporativa, garante-se governança de dados e compliance com políticas internas.

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



