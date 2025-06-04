# 🚀 GitHub Pages Setup Guide

## Configuração para Deploy no GitHub Pages

Este guia explica como configurar e fazer deploy do site **Fábio Fernandes - Agenciamento VIP de Eventos** no GitHub Pages.

### 📋 Pré-requisitos

1. Repositório no GitHub
2. GitHub Pages habilitado nas configurações do repositório
3. Branch `main` como branch principal

### ⚙️ Configurações Implementadas

#### 1. **Vite Configuration** (`vite.config.js`)
```javascript
export default defineConfig({
  base: '/fabio-events/', // ⚠️ ALTERE para o nome do seu repositório
  // ... outras configurações
})
```

#### 2. **React Router Configuration** (`src/App.jsx`)
```javascript
<Router basename="/fabio-events"> {/* ⚠️ ALTERE para o nome do seu repositório */}
```

#### 3. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Deploy automático quando há push na branch `main`
- Build do projeto com Node.js 18
- Upload e deploy para GitHub Pages

#### 4. **SPA Routing Files**
- `public/404.html` - Redireciona rotas não encontradas
- Script no `index.html` - Processa redirecionamentos
- `public/.nojekyll` - Desabilita processamento Jekyll

### 🔧 Como Configurar

#### Passo 1: Alterar Base Path
Se o seu repositório tem nome diferente de `fabio-events`, altere em:
- `vite.config.js`: linha `base: '/SEU-REPO-NAME/'`
- `src/App.jsx`: linha `<Router basename="/SEU-REPO-NAME">`

#### Passo 2: GitHub Pages Settings
1. Vá para **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione **GitHub Actions**
3. O workflow será executado automaticamente

#### Passo 3: Deploy
```bash
# Faça commit e push das alterações
git add .
git commit -m "Configure GitHub Pages"
git push origin main
```

### 🌐 URLs de Acesso

- **Desenvolvimento**: `http://localhost:5173/fabio-events/`
- **GitHub Pages**: `https://SEU-USERNAME.github.io/fabio-events/`

### 🔍 Testes Locais

Para testar a versão de produção localmente:

```bash
# Build do projeto
npm run build

# Servir localmente (simula GitHub Pages)
npx serve dist --single --listen 3000
# Acesse: http://localhost:3000
```

### 🐛 Solução de Problemas

#### Problema: "Página não carrega no GitHub Pages"
- ✅ Verifique se o `basename` no React Router está correto
- ✅ Confirme se o `base` no Vite config está correto
- ✅ Verifique se GitHub Actions está habilitado

#### Problema: "Rotas não funcionam"
- ✅ Confirme se `404.html` está na pasta `public/`
- ✅ Verifique se o script no `index.html` está presente
- ✅ Teste com `npx serve dist --single`

#### Problema: "Build falha"
- ✅ Execute `npm run build` localmente
- ✅ Verifique se não há erros de TypeScript/ESLint
- ✅ Confirme se todas as dependências estão instaladas

### 📝 Notas Importantes

1. **Base Path**: Sempre use o nome exato do repositório GitHub
2. **HTTPS**: GitHub Pages força HTTPS em produção
3. **Cache**: Pode levar alguns minutos para atualizações aparecerem
4. **Custom Domain**: Para domínio próprio, adicione arquivo `CNAME` em `public/`

### ✨ Deploy Automatizado

O workflow está configurado para:
- ✅ Trigger automático no push para `main`
- ✅ Build com Node.js 18
- ✅ Deploy automático para GitHub Pages
- ✅ Suporte para SPA routing

---

**Site**: Fábio Fernandes - Agenciamento VIP de Eventos  
**Tecnologias**: React 19 + Vite + TailwindCSS + GitHub Pages 