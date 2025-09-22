# 📸 Photo Gallery - Ionic React

Uma aplicação de galeria de fotos desenvolvida com Ionic React, TypeScript e Capacitor, que permite capturar, visualizar e gerenciar fotos com persistência local.

## 🚀 Características

- ✅ **Captura de fotos** usando câmera ou seleção de arquivos
- ✅ **Galeria responsiva** com layout em grid
- ✅ **Persistência local** usando Capacitor Preferences
- ✅ **Conversão automática para base64** para compatibilidade total
- ✅ **Estado compartilhado** entre componentes usando React Context
- ✅ **Interface moderna** com Ionic Components
- ✅ **TypeScript** para type safety
- ✅ **Suporte multiplataforma** (Web, iOS, Android)

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Ionic React** 8.5.0 - Framework de UI
- **React** 19.0.0 - Biblioteca de interface
- **TypeScript** 5.1.6 - Tipagem estática
- **Vite** 5.2.0 - Build tool e dev server

### Capacitor Plugins

- **@capacitor/camera** - Acesso à câmera
- **@capacitor/preferences** - Armazenamento local
- **@capacitor/filesystem** - Sistema de arquivos
- **@capacitor/core** - Core do Capacitor

### Desenvolvimento

- **ESLint** - Linting de código
- **Cypress** - Testes E2E
- **Vitest** - Testes unitários

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── ExploreContainer.tsx
├── contexts/           # Contextos React
│   └── PhotoGalleryContext.tsx  # Gerenciamento global de fotos
├── hooks/              # Custom hooks
│   └── usePhotoGallery.ts       # Hook para usar o contexto
├── pages/              # Páginas da aplicação
│   ├── Tab1.tsx        # Página da Câmera
│   ├── Tab2.tsx        # Página da Galeria
│   └── Tab3.tsx        # Página adicional
├── theme/              # Tema e variáveis CSS
│   └── variables.css
├── App.tsx             # Componente raiz
└── main.tsx           # Entry point
```

## 🏗️ Arquitetura

### Context Pattern

O projeto utiliza React Context para gerenciar o estado global das fotos:

```typescript
// PhotoGalleryContext.tsx
interface PhotoGalleryContextType {
  photos: UserPhoto[];
  takePhoto: () => Promise<void>;
  clearAllPhotos: () => Promise<void>;
}
```

### Persistência de Dados

- **Capacitor Preferences** para armazenar metadados das fotos
- **Conversão automática para base64** para garantir persistência
- **Validação de URLs** para limpar dados corrompidos

### Componentes Principais

#### Tab1 (Câmera)

- Botão flutuante para captura de fotos
- Interface limpa e intuitiva
- Integração com Capacitor Camera

#### Tab2 (Galeria)

- Grid responsivo de fotos (2 colunas)
- Contador de fotos
- Botão de debug para limpar galeria
- Mensagem quando não há fotos

## 🚀 Como Usar

### Pré-requisitos

- Node.js 16+
- npm ou yarn
- Git

### 1. Clonando o Repositório

```bash
git clone https://github.com/TheodoroL/photo-gallery.git
cd photo-gallery
```

### 2. Instalando Dependências

```bash
npm install
```

### 3. Executando em Desenvolvimento

```bash
npm run dev
```

A aplicação será aberta em `http://localhost:5173`

### 4. Usando a Aplicação

#### Capturando Fotos

1. Navegue para a aba **"Câmera"**
2. Clique no botão 📷 no canto inferior
3. Escolha entre:
   - **Tirar foto** (se tiver câmera)
   - **Selecionar arquivo** (escolher imagem existente)
4. A foto será automaticamente salva

#### Visualizando a Galeria

1. Navegue para a aba **"Galeria"**
2. Veja todas as fotos em um grid responsivo
3. As fotos são persistentes entre sessões

#### Gerenciando Fotos

- **Contador automático** mostra quantas fotos você tem
- **Botão "Limpar Todas as Fotos"** para resetar a galeria (modo debug)

### 5. Build para Produção

```bash
npm run build
```

### 6. Deploy Mobile (Opcional)

#### iOS

```bash
npx cap add ios
npx cap run ios
```

#### Android

```bash
npx cap add android
npx cap run android
```

## 🧪 Executando Testes

### Testes Unitários

```bash
npm run test.unit
```

### Testes E2E

```bash
npm run test.e2e
```

### Linting

```bash
npm run lint
```

## 🔧 Desenvolvimento

### Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
- `npm run test.unit` - Testes unitários
- `npm run test.e2e` - Testes E2E
- `npm run lint` - Verificação de código

### Adicionando Novas Funcionalidades

#### 1. Criando um Novo Hook

```typescript
// src/hooks/useCustomHook.ts
import { useContext } from "react";
import { PhotoGalleryContext } from "../contexts/PhotoGalleryContext";

export function useCustomHook() {
  const context = useContext(PhotoGalleryContext);
  // sua lógica aqui
  return context;
}
```

#### 2. Adicionando Nova Página

```typescript
// src/pages/NewPage.tsx
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export function NewPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nova Página</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{/* conteúdo */}</IonContent>
    </IonPage>
  );
}
```

## 🐛 Resolução de Problemas

### Problemas Comuns

#### 1. Erro "ERR_FILE_NOT_FOUND" com URLs blob

**Problema**: URLs blob temporárias expirando
**Solução**: O projeto já implementa conversão automática para base64

#### 2. Fotos não aparecem entre abas

**Problema**: Estado não compartilhado
**Solução**: Usar o PhotoGalleryContext (já implementado)

#### 3. Fotos perdidas após recarregar

**Problema**: Falta de persistência
**Solução**: Capacitor Preferences salva automaticamente

### Debug

#### Logs do Console

O projeto inclui logs detalhados para debug:

```
🔄 Context: Carregando fotos salvas...
📸 Context: Iniciando takePhoto...
📷 Context: Foto capturada
🔄 Context: Convertido para base64 com sucesso
✅ Context: Estado atualizado
💾 Context: Fotos salvas no storage
```

#### Limpeza de Dados

Use o botão "🗑️ Limpar Todas as Fotos" na aba Galeria para resetar completamente.

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👨‍💻 Autor

**Lucas Theodoro** - [GitHub](https://github.com/TheodoroL)
**Gabriel Izidre** - [GitHub](https://github.com/Gabriel-Izidre)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:

1. Verifique os logs no console do navegador (F12)
2. Use o botão de debug para limpar dados corrompidos
3. Verifique se todas as dependências estão instaladas
4. Abra uma issue no GitHub

---

**Desenvolvido com ❤️ usando Ionic React**
