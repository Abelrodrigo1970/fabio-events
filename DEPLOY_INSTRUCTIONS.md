# 🚀 Instruções para Deploy no GitHub Pages

## Alterações Realizadas:
- ✅ Imagem da home page alterada para `logo_fabio.png`
- ✅ Alt text atualizado para "Fábio Fernandes - Agenciamento VIP de Eventos"
- ✅ Import adicionado no arquivo de assets

## Para atualizar o GitHub Pages, execute os seguintes comandos:

```bash
# 1. Fazer build do projeto
npm run build

# 2. Adicionar todas as alterações ao Git
git add .

# 3. Fazer commit com mensagem descritiva
git commit -m "Update home page to use Fábio logo instead of external image"

# 4. Fazer push para o GitHub (vai triggar o deploy automático)
git push origin main
```

## Verificação:
1. Vá para: https://github.com/Abelrodrigo1970/fabio-events/actions
2. Aguarde o workflow "Deploy to GitHub Pages" completar
3. Acesse: https://abelrodrigo1970.github.io/fabio-events/
4. A home page deve mostrar o logo do Fábio como imagem de fundo

## Tempo estimado:
- Build: ~30 segundos
- Deploy: ~2-3 minutos
- Propagação: ~1-2 minutos

Total: aproximadamente 5 minutos para ver as alterações no site. 