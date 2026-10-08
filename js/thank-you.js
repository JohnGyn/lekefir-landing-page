(() => {
  const config = document.currentScript?.dataset
  const C = window.LP_CONFIG || {}

  // Botão de suporte: usa o WhatsApp do js/config.js; sem número, o botão some
  const cta = document.querySelector('[data-ty-wa]')
  if (cta) {
    if (C.whatsapp) {
      const msg = 'Olá! Acabei de fazer um pedido do Créatif Redutor Le\'Kéfir e gostaria de tirar uma dúvida.'
      cta.href = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`
    } else {
      cta.hidden = true
    }
  }

  // ---------- Meta Pixel ----------
  const pixelId = config?.pixel
  if (!pixelId) return
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', pixelId)
  fbq('track', 'PageView')

  // O evento Purchase só corresponde ao retorno de pagamento aprovado.
  if (config.status !== 'approved') return
  const key = `purchase-tracked:${pixelId}:${location.href}`
  try {
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')
  } catch {
    // Navegação sem sessionStorage: o evento ainda é enviado.
  }
  const params = new URLSearchParams(location.search)
  const rawValue = params.get('value') ?? params.get('valor')
  const value = rawValue ? Number(rawValue.replace(',', '.')) : NaN
  fbq('track', 'Purchase', {
    currency: 'BRL',
    content_name: 'Créatif Redutor Le\'Kéfir',
    ...(Number.isFinite(value) && value > 0 ? { value } : {}),
  })
})()
