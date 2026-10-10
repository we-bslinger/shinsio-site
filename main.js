(() => {
  const fmt = n => '$' + n.toFixed(2);
  const pkgs = document.querySelectorAll('input[name="package"]');
  const packs = document.querySelectorAll('input[name="pack"]');
  function update() {
    const sel = document.querySelector('input[name="package"]:checked');
    const p = sel ? parseFloat(sel.dataset.price) : 0;
    const chosen = [...packs].filter(x => x.checked);
    const pk = chosen.reduce((s, x) => s + parseFloat(x.dataset.price), 0);
    document.getElementById('sum-pkg').textContent = fmt(p);
    document.getElementById('sum-packs-label').textContent = `Research packs (${chosen.length})`;
    document.getElementById('sum-packs').textContent = fmt(pk);
    document.getElementById('sum-total').textContent = fmt(Math.round((p + pk) * 100) / 100);
  }
  [...pkgs, ...packs].forEach(i => i.addEventListener('change', update));
  update();

  document.getElementById('checkout').addEventListener('click', () => {
    const n = document.getElementById('checkout-note');
    n.textContent = 'Prototype only — checkout is not live yet and no payment is processed.';
    n.classList.add('flash');
  });

  // App family
  const apps = [
    { id: 'CIPEEBOX', tag: 'Your digital cookbook.', desc: 'Save, organise and build a personal collection of recipes.', hue: 'lav' },
    { id: 'YRAM', tag: 'Creator intelligence and content analysis.', desc: 'Structured content analysis, ideas and planning for creators.', hue: 'blue' },
    { id: 'PLAYCEE', tag: 'Travel and destination discovery.', desc: 'Discover places and plan where to go next.', hue: 'green' },
    { id: 'BuiltDee', tag: 'Practical knowledge for hobby and DIY.', desc: 'Keep materials, tools, steps and notes for your projects organised.', hue: 'peach' },
    { id: 'KeyPee', tag: 'Your archive and content library.', desc: 'Save and organise the content you want to keep in one place.', hue: 'rose' }
  ];
  const chips = document.querySelector('.chips'), card = document.getElementById('app-card');
  function show(i) {
    const a = apps[i];
    chips.querySelectorAll('button').forEach((b, j) => { b.setAttribute('aria-selected', j === i); b.tabIndex = j === i ? 0 : -1; });
    document.getElementById('app-name').textContent = a.id;
    document.getElementById('app-tag').textContent = a.tag;
    document.getElementById('app-desc').textContent = a.desc;
    card.dataset.hue = a.hue;
  }
  apps.forEach((a, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.role = 'tab'; b.textContent = a.id;
    b.addEventListener('click', () => show(i));
    b.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const n = (i + (e.key === 'ArrowRight' ? 1 : apps.length - 1)) % apps.length;
        show(n); chips.children[n].focus();
      }
    });
    chips.appendChild(b);
  });
  show(0);
})();
