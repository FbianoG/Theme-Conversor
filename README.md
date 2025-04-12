# 🎨 Theme Converter  DaisyUI para Shadcn

Uma ferramenta simples para transformar temas do DaisyUI em variáveis compatíveis com o sistema de design do Shadcn/UI.

## ✅ Como Usar?

### 1. Acesse o Theme Generator

Abra o nosso site:  
🔗 [https://theme-conversor.vercel.app/](https://theme-conversor.vercel.app/)

Depois o site gerador de temas do DaisyUI:  
🔗 [https://daisyui.com/theme-generator/](https://daisyui.com/theme-generator/)

---

### 2. Escolha seu Tema

No DaisyUI, use os controles para personalizar as cores conforme desejar.

---

### 3. Copie o CSS Gerado

Copie **apenas as linhas que começam com `--` (variáveis CSS)**.

📌 **Importante:** copie todas as linhas **a partir de `--color-base-100` até `--noise:`**.

Exemplo:

```css
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(93% 0 0);
  --color-base-300: oklch(87% 0 0);
  --color-base-content: oklch(22.389% 0.031 278.072);
  --color-primary: oklch(58% 0.158 241.966);
   até a linha "--noise: 0;"

```
---

### 4. Cole no Conversor do Nosso Site
Volte ao nosso site, cole essas variáveis no `textarea` ao final da página e clique em `Converter`.

O CSS convertido para tokens do Shadcn será gerado ao lado.

---

### 5. Atualize seu CSS
Copie o bloco `:root` gerado e cole no seu arquivo globals.css, substituindo o `:root` original.

---

### 🌙 Tema Escuro (opcional)
Caso queira criar um Dark Theme, basta:

Trocar o seletor `:root` por `.dark`

Substituir o seu `.dark` original por esse novo bloco gerado

---

> 💡 **Observações**  
> Você pode editar manualmente o CSS convertido.  
> Isso ajuda a ajustar o visual dos seus componentes antes de aplicar no projeto.

---

## 📝 Considerações Finais

Este conversor foi pensado para facilitar a personalização de temas no ecossistema Shadcn, aproveitando a flexibilidade visual do DaisyUI.

Ele permite uma transição rápida e visualmente precisa entre estilos, mantendo consistência e produtividade no desenvolvimento de interfaces modernas.

Se quiser contribuir com melhorias ou sugerir novos recursos, fique à vontade para abrir uma issue ou pull request.


---

## 👤 Autor

Desenvolvido por **Fabiano Gonçalves**  
