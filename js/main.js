(() => {
  const C = window.LP_CONFIG
  const $ = (s, el = document) => el.querySelector(s)
  const $$ = (s, el = document) => [...el.querySelectorAll(s)]
  const brl = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  // ---------- links (WhatsApp e UTMs) ----------
  const waLink = (text = C.whatsappMessage) =>
    C.whatsapp ? `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}` : ''

  // repassa utm_*, fbclid etc. da página para o checkout
  const params = new URLSearchParams(location.search)
  const withTracking = (url) => {
    if (!url || ![...params].length) return url
    const u = new URL(url)
    params.forEach((v, k) => { if (!u.searchParams.has(k)) u.searchParams.set(k, v) })
    return u.toString()
  }

  // ---------- ofertas ----------
  const offersEl = $('[data-offers]')
  if (offersEl) {
    offersEl.innerHTML = C.ofertas.map((o) => {
      const featured = o.destaque === 'MAIS VENDIDO'
      const hasPrice = typeof o.preco === 'number'
      const perApp = hasPrice ? o.preco / (o.frascos * C.aplicacoesPorFrasco) : null
      const perUnit = hasPrice && o.frascos > 1 ? o.preco / o.frascos : null
      const href = withTracking(o.checkout) || waLink(`${C.whatsappMessage} Quero: ${o.titulo}.`) || '#'
      const external = href.startsWith('http')
      return `
        <article class="offer${featured ? ' offer--featured' : ''}">
          ${o.destaque ? `<span class="offer__badge">${o.destaque}</span>` : ''}
          <img class="offer__img" src="${o.imagem}" alt="${o.titulo}" loading="lazy" width="600" height="600">
          <h3>${o.titulo}</h3>
          <p class="offer__sub">${o.subtitulo}</p>
          ${hasPrice ? `
            ${o.precoDe ? `<p class="offer__from">De R$ ${brl(o.precoDe)}</p>` : '<p class="offer__from offer__from--empty" aria-hidden="true">&nbsp;</p>'}
            <p class="offer__price"><small>R$</small> ${brl(o.preco)}</p>
            <p class="offer__inst">ou em até ${C.parcelas}x no cartão</p>
            ${perUnit ? `<span class="offer__per">Cada frasco sai por R$ ${brl(perUnit)}</span>` : ''}
            ${perApp ? `<span class="offer__per">R$ ${brl(perApp)} por aplicação</span>` : ''}
          ` : '<p class="offer__price offer__price--tbd">Valor a definir</p>'}
          <a class="btn ${featured ? 'btn--gold' : 'btn--dark'}" href="${href}" data-offer="${o.id}"
             ${external ? 'target="_blank" rel="noopener"' : ''}>Comprar agora</a>
          ${C.freteGratis ? '<p class="offer__ship">✦ Frete grátis</p>' : ''}
        </article>`
    }).join('')
  }

  if (!C.freteGratis) {
    $('.topbar')?.remove()
    const f = $('[data-frete]'); if (f) f.textContent = 'Envio imediato para todo o Brasil'
  }

  // ---------- WhatsApp flutuante ----------
  const wa = $('[data-wa]')
  if (wa && C.whatsapp) { wa.href = waLink(); wa.target = '_blank'; wa.rel = 'noopener'; wa.hidden = false }

  // ---------- rodapé ----------
  const e = C.empresa
  const company = $('[data-company]')
  if (company) company.textContent = [e.razaoSocial, e.cnpj && `CNPJ ${e.cnpj}`, e.email].filter(Boolean).join(' · ')
  const loja = $('[data-loja]'); if (loja) loja.href = e.loja
  // redes sociais (os links já estão no HTML; o config só sobrescreve)
  const social = { instagram: e.instagram && `https://www.instagram.com/${e.instagram}/`, tiktok: e.tiktok && `https://www.tiktok.com/@${e.tiktok}` }
  $$('[data-social]').forEach((a) => { const url = social[a.dataset.social]; if (url) a.href = url })
  const year = $('[data-year]'); if (year) year.textContent = new Date().getFullYear()

  // ---------- antes/depois ----------
  $$('[data-ba]').forEach((ba) => {
    const range = $('.ba__range', ba)
    const set = (v) => ba.style.setProperty('--pos', `${v}%`)
    range.addEventListener('input', () => set(range.value))
    set(range.value)
  })

  // ---------- vídeos: tocam só quando aparecem na tela ----------
  const vids = $$('video[data-autoplay]')
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.preload = 'auto'; target.play().catch(() => {}) } else target.pause()
    }), { threshold: 0.35 })
    vids.forEach((v) => io.observe(v))
  }

  // ---------- CTA fixo no mobile ----------
  const sticky = $('[data-sticky]')
  const hero = $('.hero')
  const offers = $('#ofertas')
  if (sticky && hero) {
    let offersVisible = false
    new IntersectionObserver(([en]) => { offersVisible = en.isIntersecting; update() }).observe(offers)
    const update = () => sticky.classList.toggle('is-visible', window.scrollY > hero.offsetHeight * 0.8 && !offersVisible)
    addEventListener('scroll', update, { passive: true })
  }

  // ---------- Meta Pixel: o código base fica no <head> do index.html ----------
  if (typeof window.fbq === 'function') {
    $$('[data-offer]').forEach((a) => a.addEventListener('click', () => {
      const o = C.ofertas.find((x) => x.id === a.dataset.offer)
      fbq('track', 'InitiateCheckout', { content_name: o.titulo, currency: 'BRL', ...(o.preco ? { value: o.preco } : {}) })
    }))
  }
})()
