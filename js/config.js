// ============================================================
//  CONFIGURAÇÃO DA LANDING PAGE: edite só este arquivo
//  Preço `null` aparece como "valor a definir".
//  Checkout vazio leva o botão para o WhatsApp.
// ============================================================
window.LP_CONFIG = {
  // Número com DDI e DDD, só dígitos. Ex.: '5562999999999'. Vazio esconde o botão.
  whatsapp: '',
  whatsappMessage: 'Olá! Tenho interesse no Créatif Redutor Le\'Kéfir.',

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
      checkout: '',
    },
    {
      id: 'un2',
      titulo: '2 Créatif Redutor',
      subtitulo: '2 frascos 1L · até 30 aplicações',
      imagem: 'assets/img/offer-2.webp',
      frascos: 2,
      preco: null, // ⚠️ aguardando a cliente
      precoDe: null,
      checkout: '',
    },
    {
      id: 'un3',
      titulo: '3 Créatif Redutor',
      subtitulo: '3 frascos 1L · até 45 aplicações',
      imagem: 'assets/img/offer-3.webp',
      frascos: 3,
      preco: 397,
      precoDe: 591,
      checkout: '',
      destaque: 'MAIS VENDIDO',
    },
    {
      id: 'kit',
      titulo: 'Kit Tratamento Completo',
      subtitulo: 'Créatif Redutor 1L + Shampoo Antirresíduo 1L',
      imagem: 'assets/img/offer-kit.webp',
      frascos: 1,
      preco: null, // ⚠️ aguardando a cliente
      precoDe: null,
      checkout: '',
      destaque: 'KIT COMPLETO',
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
