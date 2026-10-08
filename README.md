# Landing Page: Le'Kéfir Créatif Redutor (v1)

Página estática (HTML, CSS e JS puros, sem build). Para publicar na VPS, basta copiar a pasta `Site/` inteira (5,4 MB).

```bash
python3 -m http.server 4321 --directory Site   # ver localmente em http://localhost:4321
```

## Onde editar

| O quê | Arquivo |
|---|---|
| **Preços, links de checkout Braip, WhatsApp, Meta Pixel, frete, CNPJ** | `js/config.js` |
| Textos e seções | `index.html` |
| Cores e fontes (variáveis no topo) | `css/style.css` |

- Preço `null` aparece como **"Valor a definir"**.
- Sem link de checkout, o botão leva ao WhatsApp. Se também não houver WhatsApp, ele fica como `#`.
- Os parâmetros `utm_*` e `fbclid` da URL são repassados automaticamente ao checkout.
- O pixel dispara `PageView` e `InitiateCheckout` no clique de cada oferta.

## Páginas de obrigado (URLs de retorno na Braip)

| Situação | URL |
|---|---|
| Pagamento aprovado (dispara **Purchase**) | `https://lekefir.vercel.app/obrigado/` |
| Pix gerado | `https://lekefir.vercel.app/obrigado/pix/` |
| Boleto gerado | `https://lekefir.vercel.app/obrigado/boleto/` |
| Em processamento | `https://lekefir.vercel.app/obrigado/processando/` |

O Purchase usa o valor de `?value=` (ou `?valor=`) se a Braip repassar esse parâmetro, e não dispara de novo se a pessoa recarregar a página.

## Meta Pixel

ID `1695981177438635`. O código base fica no `<head>` do `index.html` e no `data-pixel` das páginas `/obrigado`. Eventos: `PageView` (todas as páginas), `InitiateCheckout` (clique em "Comprar agora") e `Purchase` (só em `/obrigado/`).

## Pendências (v1 → v2)

- [ ] Preço de 2 unidades e do Kit · links da Braip · WhatsApp (também ativa o botão de suporte nas páginas de obrigado) · CNPJ
- [ ] Confirmar frete grátis, parcelamento em 12× e o "De R$ 591" do card de 3 unidades
- [ ] Autorização do Studio 761 para o vídeo de antes e depois
- [ ] Composição do rótulo (pedido da cliente)
- [ ] Links de política de privacidade e termos de uso

## Imagens

Hero, cards de oferta, slider de antes e depois, tipos de cabelo, mockup do guia e cena de salão foram **gerados com IA (Codex)** a partir das fotos reais do frasco. Os PNGs originais e o script `gen.sh` estão em `Referências/06-imagens-geradas-ia/`. A galeria de resultados usa os criativos que a cliente já tinha e os reels do Instagram.

## Regras de conteúdo (Anvisa)

O produto é registrado como **redutor de volume**. A página não usa "progressiva" nem "alisamento" e não mostra tempos nem temperaturas. O passo a passo completo vai no Guia em PDF, entregue depois da compra. Detalhes em `../prompt.md`.
