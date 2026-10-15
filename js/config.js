// ============================================================
//  CONFIGURAÇÃO DA LANDING PAGE: edite só este arquivo
//  Preço `null` aparece como "valor a definir".
//  Checkout vazio leva o botão para o WhatsApp.
// ============================================================
window.LP_CONFIG = {
  // Número com DDI e DDD, só dígitos. Ex.: '5562999999999'. Vazio esconde o botão.
  whatsapp: '5519992061661',
  whatsappMessage: 'Olá! Vim pelo site da Le\'Kéfir e gostaria de mais informações sobre o Créatif Redutor.',

  // Meta Pixel: o código base (ID 1695981177438635) está no <head> do index.html
  // e no data-pixel das páginas /obrigado.

  // Frete e parcelamento exibidos nos cards
  freteGratis: true,
  parcelas: 12,

  // Aplicações por frasco (cabelo longo), usado no "valor por aplicação"
  aplicacoesPorFrasco: 15,

  ofertas: [
    {
      id: 'un1',
      titulo: '1 Créatif Redutor',
      subtitulo: 'Frasco 1L · até 15 aplicações',
      imagem: 'assets/img/offer-1.webp',
      frascos: 1,
      preco: 197,
      precoDe: null,
      checkout: 'https://ev.braip.com/checkout/plamn8gg/che74jkx?currency=BRL',
    },
    {
      id: 'un2',
      titulo: '2 Créatif Redutor',
      subtitulo: '2 frascos 1L · até 30 aplicações',
      imagem: 'assets/img/offer-2.webp',
      frascos: 2,
      preco: 297,
      precoDe: null,
      checkout: 'https://ev.braip.com/checkout/pla98kg4/che74jkx?currency=BRL',
    },
    {
      id: 'un3',
      titulo: '3 Créatif Redutor',
      subtitulo: '3 frascos 1L · até 45 aplicações',
      imagem: 'assets/img/offer-3.webp',
      frascos: 3,
      preco: 397,
      precoDe: 591,
      checkout: 'https://ev.braip.com/checkout/pla89re1/che74jkx?currency=BRL',
      destaque: 'MAIS VENDIDO',
    },
    {
      id: 'kit-duo',
      titulo: 'Kit Duo',
      subtitulo: 'Créatif Redutor 1L + Shampoo Antirresíduo 1L',
      imagem: 'assets/img/offer-kit.webp',
      frascos: 1,
      preco: 297,
      precoDe: null,
      checkout: 'https://ev.braip.com/checkout/plaq4yvl/che74jkx?currency=BRL',
      destaque: 'KIT DUO',
      incluirCustoPorAplicacao: false,
    },
    {
      id: 'kit-completo',
      titulo: 'Kit Completo',
      subtitulo: 'Créatif Redutor 1L + Shampoo Antirresíduo 1L + Lisse Térmico 120ml',
      imagem: 'assets/img/offer-complete.webp',
      frascos: 1,
      preco: 327,
      precoDe: null,
      checkout: 'https://ev.braip.com/checkout/plae60y6/che74jkx?currency=BRL',
      destaque: 'KIT COMPLETO',
      incluirCustoPorAplicacao: false,
    },
  ],

  empresa: {
    razaoSocial: 'Le\'Kéfir Cosméticos', // ⚠️ confirmar razão social
    cnpj: '', // ⚠️ preencher
    email: '',
    instagram: 'lekefircosmeticos',
    tiktok: 'lekefircosmeticos',
    loja: 'https://www.lekefircosmeticos.com.br',
  },
}
