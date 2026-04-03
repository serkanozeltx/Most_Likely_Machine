// ─── DATA ──────────────────────────────────────────────────────────────────
const CHARACTERS = [
  {
    id: 'ataturk',
    name: 'Mustafa Kemal Atatürk',
    years: '1881–1938',
    img: 'characters/ataturk.png',
    bio: 'Türkiye Cumhuriyeti\'nin kurucusu. Asker, devlet adamı ve reformcu olarak tarihe geçmiştir.',
    tags: ['Lider', 'Reformcu', 'Asker']
  },
  {
    id: 'piri_reis',
    name: 'Piri Reis',
    years: '1470–1553',
    img: 'characters/piri_reis.png',
    bio: 'Osmanlı denizcisi ve haritacı. 1513\'te çizdiği dünya haritası bugün hâlâ hayranlık uyandırır.',
    tags: ['Kâşif', 'Bilim İnsanı', 'Denizci']
  },
  {
    id: 'mevlana',
    name: 'Mevlana Celaleddin Rumi',
    years: '1207–1273',
    img: 'characters/mevlana.png',
    bio: 'Tasavvuf şairi ve alim. Mesnevi adlı eseriyle tüm dünyada sevilen evrensel bir sestir.',
    tags: ['Şair', 'Düşünür', 'Mistik']
  },
  {
    id: 'fatih',
    name: 'Fatih Sultan Mehmet',
    years: '1432–1481',
    img: 'characters/fatih.png',
    bio: '1453\'te İstanbul\'u fetheden Osmanlı padişahı. "Fatih" unvanını bu zaferle kazandı.',
    tags: ['Padişah', 'Fatih', 'Stratejist']
  },
  {
    id: 'sait_faik',
    name: 'Sait Faik Abasıyanık',
    years: '1906–1954',
    img: 'characters/sait_faik.png',
    bio: 'Türkiye\'nin en sevilen hikâye yazarlarından. İstanbul\'un insanlarını ustalıkla anlattı.',
    tags: ['Yazı Yazı', 'İstanbul', 'Hümanist']
  },
  {
    id: 'sabiha',
    name: 'Sabiha Gökçen',
    years: '1913–2001',
    img: 'characters/sabiha.png',
    bio: 'Dünyanın ilk kadın savaş pilotlarından biri. Atatürk\'ün manevi kızı olarak da bilinir.',
    tags: ['Pilot', 'Öncü', 'Kadın']
  },
  {
    id: 'nazim',
    name: 'Nazım Hikmet Ran',
    years: '1902–1963',
    img: 'characters/nazim.png',
    bio: 'Türk edebiyatının en büyük şairlerinden. Şiirleri dünyada pek çok dile çevrilmiştir.',
    tags: ['Şair', 'Yazar', 'Devrimci']
  },
  {
    id: 'yunus',
    name: 'Yunus Emre',
    years: '1238–1320',
    img: 'characters/yunus.png',
    bio: 'Anadolu\'nun halk ozanı ve tasavvuf şairi. Şiirleri yüzyıllardır dillerde dolaşır.',
    tags: ['Ozan', 'Mutasavvıf', 'Halk']
  },
  {
    id: 'hurrem',
    name: 'Hürrem Sultan',
    years: '1502–1558',
    img: 'characters/hurrem.png',
    bio: 'Osmanlı tarihinin en güçlü kadınlarından. Kanuni Sultan Süleyman\'ın eşi ve saray politikasının mimarı.',
    tags: ['Sultan', 'Diplomat', 'Güçlü']
  }
];

const AWARDS = [
  { id: 'uni', label: 'En İyi Üniversiteye Gider', icon: '🎓', chipClass: 'chip-uni', colClass: 'award-col-uni', badgeStyle: 'background:var(--award-uni-light);color:var(--award-uni)' },
  { id: 'viral', label: 'Herkesin Dilinde', icon: '🔥', chipClass: 'chip-viral', colClass: 'award-col-viral', badgeStyle: 'background:var(--award-viral-light);color:var(--award-viral)' },
  { id: 'trouble', label: 'Baş Belası', icon: '😈', chipClass: 'chip-trouble', colClass: 'award-col-trouble', badgeStyle: 'background:var(--award-trouble-light);color:var(--award-trouble)' }
];

// 27 traits total — 9 per award category (matching the original site)
const TRAITS = [
  // ── "En İyi Üniversiteye Gider" traits (9) ──
  { id: 'uyumlu',      label: 'Uyumlu',        emoji: '🤝', scores: { uni: 5, viral: 2, trouble: 1 } },
  { id: 'cesur',       label: 'Cesur',          emoji: '🦁', scores: { uni: 4, viral: 3, trouble: 2 } },
  { id: 'yaratici',    label: 'Yaratıcı',       emoji: '🎨', scores: { uni: 5, viral: 3, trouble: 1 } },
  { id: 'kararli',     label: 'Kararlı',        emoji: '💪', scores: { uni: 5, viral: 2, trouble: 2 } },
  { id: 'bagimsiz',    label: 'Bağımsız',       emoji: '🦅', scores: { uni: 4, viral: 3, trouble: 3 } },
  { id: 'muzikal',     label: 'Müzikal',        emoji: '🎵', scores: { uni: 3, viral: 4, trouble: 1 } },
  { id: 'isyankar',    label: 'İsyankâr',       emoji: '✊', scores: { uni: 2, viral: 3, trouble: 5 } },
  { id: 'teatral',     label: 'Teatral',        emoji: '🎭', scores: { uni: 3, viral: 5, trouble: 2 } },
  { id: 'cigiracici',  label: 'Çığır Açan',     emoji: '🚀', scores: { uni: 5, viral: 4, trouble: 1 } },

  // ── "Herkesin Dilinde" traits (9) ──
  { id: 'maceraci',    label: 'Maceracı',       emoji: '🧭', scores: { uni: 2, viral: 5, trouble: 3 } },
  { id: 'atletik',     label: 'Atletik',        emoji: '🏃', scores: { uni: 2, viral: 5, trouble: 2 } },
  { id: 'hesapci',     label: 'Hesapçı',        emoji: '🧮', scores: { uni: 4, viral: 3, trouble: 3 } },
  { id: 'adanmis',     label: 'Adanmış',        emoji: '🎯', scores: { uni: 3, viral: 4, trouble: 1 } },
  { id: 'gozupek',     label: 'Gözüpek',        emoji: '🔥', scores: { uni: 1, viral: 5, trouble: 4 } },
  { id: 'meydanokuyan',label: 'Meydan Okuyan',  emoji: '⚡', scores: { uni: 1, viral: 4, trouble: 5 } },
  { id: 'disiplinli',  label: 'Disiplinli',     emoji: '📐', scores: { uni: 5, viral: 3, trouble: 1 } },
  { id: 'komik',       label: 'Komik',          emoji: '😂', scores: { uni: 1, viral: 5, trouble: 3 } },
  { id: 'etkili',      label: 'Etkili',         emoji: '👑', scores: { uni: 4, viral: 5, trouble: 2 } },

  // ── "Baş Belası" traits (9) ──
  { id: 'saldirgan',   label: 'Saldırgan',      emoji: '💥', scores: { uni: 1, viral: 3, trouble: 5 } },
  { id: 'buyuleyici',  label: 'Büyüleyici',     emoji: '✨', scores: { uni: 3, viral: 5, trouble: 2 } },
  { id: 'ozverili',    label: 'Özverili',       emoji: '🤲', scores: { uni: 4, viral: 2, trouble: 1 } },
  { id: 'azimli',      label: 'Azimli',         emoji: '🔨', scores: { uni: 4, viral: 3, trouble: 3 } },
  { id: 'cokdilli',    label: 'Çok Dilli',      emoji: '🌍', scores: { uni: 5, viral: 3, trouble: 1 } },
  { id: 'sakaci',      label: 'Şakacı',         emoji: '🃏', scores: { uni: 1, viral: 4, trouble: 4 } },
  { id: 'amansiz',     label: 'Amansız',        emoji: '🐺', scores: { uni: 2, viral: 3, trouble: 5 } },
  { id: 'sert',        label: 'Sert',           emoji: '🪨', scores: { uni: 1, viral: 2, trouble: 5 } },
  { id: 'kindar',      label: 'Kindar',         emoji: '🗡️', scores: { uni: 1, viral: 2, trouble: 5 } }
];

// Character trait mappings (which traits describe each character)
const CHAR_TRAITS = {
  ataturk:   ['kararli', 'cigiracici', 'cesur', 'etkili', 'azimli', 'bagimsiz', 'disiplinli', 'adanmis'],
  piri_reis: ['maceraci', 'yaratici', 'cigiracici', 'cesur', 'gozupek', 'cokdilli', 'bagimsiz', 'hesapci'],
  mevlana:   ['yaratici', 'buyuleyici', 'muzikal', 'uyumlu', 'teatral', 'ozverili', 'cokdilli', 'etkili'],
  fatih:     ['kararli', 'saldirgan', 'hesapci', 'gozupek', 'azimli', 'amansiz', 'cesur', 'etkili'],
  sait_faik: ['yaratici', 'bagimsiz', 'teatral', 'uyumlu', 'komik', 'buyuleyici', 'ozverili', 'isyankar'],
  sabiha:    ['cesur', 'gozupek', 'kararli', 'cigiracici', 'maceraci', 'disiplinli', 'azimli', 'adanmis'],
  nazim:     ['yaratici', 'isyankar', 'meydanokuyan', 'cesur', 'etkili', 'bagimsiz', 'adanmis', 'buyuleyici'],
  yunus:     ['uyumlu', 'muzikal', 'buyuleyici', 'yaratici', 'ozverili', 'teatral', 'cokdilli', 'adanmis'],
  hurrem:    ['hesapci', 'etkili', 'buyuleyici', 'sert', 'kararli', 'amansiz', 'sakaci', 'kindar']
};

// ─── STATE ─────────────────────────────────────────────────────────────────
let state = {
  currentStep: 1,
  totalSteps: 10,
  predictions: { uni: '', viral: '', trouble: '' },
  assignments: { uni: [], viral: [], trouble: [] }, // trait ids
  algorithmResults: { uni: null, viral: null, trouble: null }
};

// ─── UTILITY ───────────────────────────────────────────────────────────────
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const charById = (id) => CHARACTERS.find(c => c.id === id);
const traitById = (id) => TRAITS.find(t => t.id === id);

function setProgress(step) {
  const pct = ((step - 1) / (state.totalSteps - 1)) * 100;
  $('#progress-fill').style.width = pct + '%';
  $('#step-indicator').textContent = `Adım ${step} / ${state.totalSteps}`;
}

function showScreen(step) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  const s = document.getElementById(`screen-${step}`);
  if (s) s.classList.add('active');
  setProgress(step);
  updateNavButtons(step);
  if (step === 7) runAlgorithm();
  // scroll to top
  if (s) s.scrollTop = 0;
}

function updateNavButtons(step) {
  const backBtn = $('#btn-back');
  const nextBtn = $('#btn-next');
  backBtn.style.display = step === 1 ? 'none' : '';
  if (step === 6) {
    nextBtn.textContent = '🚀 Algoritmayı Çalıştır';
    nextBtn.className = 'btn btn-run';
  } else if (step === 10) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.textContent = 'İLERİ ›';
    nextBtn.className = 'btn btn-primary';
    nextBtn.style.display = '';
  }
}

// ─── CUSTOM SELECTS (Step 4) ────────────────────────────────────────────────
function buildSelectDropdown(award) {
  const sel = document.getElementById(`select-${award.id}`);
  const trigger = sel.querySelector('.select-trigger');
  const dropdown = sel.querySelector('.select-dropdown');
  const selectedSpan = trigger.querySelector('.select-value');

  // populate options
  CHARACTERS.forEach(c => {
    const opt = document.createElement('div');
    opt.className = 'select-option';
    opt.dataset.value = c.id;
    opt.textContent = c.name;
    opt.addEventListener('click', () => {
      state.predictions[award.id] = c.id;
      selectedSpan.textContent = c.name;
      trigger.classList.remove('open');
      dropdown.classList.remove('open');
      dropdown.querySelectorAll('.select-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
    dropdown.appendChild(opt);
  });

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = trigger.classList.contains('open');
    // Close all
    $$('.select-trigger').forEach(t => t.classList.remove('open'));
    $$('.select-dropdown').forEach(d => d.classList.remove('open'));
    if (!isOpen) {
      trigger.classList.add('open');
      dropdown.classList.add('open');
    }
  });
}

document.addEventListener('click', () => {
  $$('.select-trigger').forEach(t => t.classList.remove('open'));
  $$('.select-dropdown').forEach(d => d.classList.remove('open'));
});

// ─── CARD-BASED TRAIT ASSIGNMENT (Step 5) ────────────────────────────────────
const MAX_PER_AWARD = 9;
let traitQueue = []; // trait ids remaining to show
let currentTraitIdx = 0;

function buildTraitsStep() {
  state.assignments = { uni: [], viral: [], trouble: [] };
  traitQueue = TRAITS.map(t => t.id);
  currentTraitIdx = 0;
  showCurrentTrait();
  renderAssignColumns();

  // Award assign buttons
  document.getElementById('assign-uni').onclick = () => assignCurrentTrait('uni');
  document.getElementById('assign-viral').onclick = () => assignCurrentTrait('viral');
  document.getElementById('assign-trouble').onclick = () => assignCurrentTrait('trouble');
  document.getElementById('trait-skip-btn').onclick = () => skipCurrentTrait();
}

function showCurrentTrait() {
  const showcase = document.getElementById('trait-showcase');
  const doneMsg = document.getElementById('trait-done-msg');

  if (traitQueue.length === 0) {
    showcase.style.display = 'none';
    doneMsg.style.display = 'block';
    return;
  }

  showcase.style.display = '';
  doneMsg.style.display = 'none';

  const tid = traitQueue[0];
  const t = traitById(tid);
  const total = TRAITS.length;
  const done = total - traitQueue.length;

  document.getElementById('trait-progress-text').textContent = `Özellik ${done + 1} / ${total}`;
  document.getElementById('trait-big-emoji').textContent = t.emoji;
  document.getElementById('trait-big-label').textContent = t.label;

  // Re-trigger card animation
  const card = document.getElementById('trait-big-card');
  card.style.animation = 'none';
  card.offsetHeight; // force reflow
  card.style.animation = '';

  // Disable buttons if award is full
  AWARDS.forEach(a => {
    const btn = document.getElementById(`assign-${a.id}`);
    btn.disabled = state.assignments[a.id].length >= MAX_PER_AWARD;
  });
}

function assignCurrentTrait(awardId) {
  if (traitQueue.length === 0) return;
  if (state.assignments[awardId].length >= MAX_PER_AWARD) return;

  const tid = traitQueue.shift();
  state.assignments[awardId].push(tid);
  showCurrentTrait();
  renderAssignColumns();
}

function skipCurrentTrait() {
  if (traitQueue.length === 0) return;
  const skipped = traitQueue.shift();
  traitQueue.push(skipped); // put at end
  showCurrentTrait();
}

function removeAssignment(awardId, tid) {
  state.assignments[awardId] = state.assignments[awardId].filter(id => id !== tid);
  // Also remove from priorities if present
  if (state.priorities) {
    state.priorities[awardId] = (state.priorities[awardId] || []).filter(id => id !== tid);
  }
  // Re-add to queue
  if (!traitQueue.includes(tid)) {
    traitQueue.push(tid);
  }
  showCurrentTrait();
  renderAssignColumns();
}

function renderAssignColumns() {
  AWARDS.forEach(award => {
    const list = document.getElementById(`alist-${award.id}`);
    const counter = document.getElementById(`counter-${award.id}`);
    list.innerHTML = '';
    counter.textContent = `${state.assignments[award.id].length} / ${MAX_PER_AWARD}`;

    state.assignments[award.id].forEach(tid => {
      const t = traitById(tid);
      const el = document.createElement('div');
      el.className = 'assigned-trait';
      el.innerHTML = `<span>${t.emoji} ${t.label}</span><span class="remove-assigned" title="Kaldır">✕</span>`;
      el.querySelector('.remove-assigned').addEventListener('click', () => removeAssignment(award.id, tid));
      list.appendChild(el);
    });
  });
}

// ─── FINE-TUNE (Step 6) ─────────────────────────────────────────────────────
let activeTab = 'uni';
state.priorities = { uni: [], viral: [], trouble: [] };

function buildFineTune() {
  // Copy assignments to priorities
  AWARDS.forEach(a => {
    state.priorities[a.id] = [...state.assignments[a.id]];
  });
  renderTab(activeTab);
}

function renderTab(awardId) {
  activeTab = awardId;
  // Update tab styles
  AWARDS.forEach(a => {
    const tab = document.getElementById(`tab-${a.id}`);
    tab.className = 'tab';
    if (a.id === awardId) {
      if (awardId === 'uni') tab.classList.add('active-uni');
      else if (awardId === 'viral') tab.classList.add('active-viral');
      else tab.classList.add('active-trouble');
    }
  });

  const list = $('#priority-list');
  list.innerHTML = '';
  const priorities = state.priorities[awardId];

  if (!priorities || priorities.length === 0) {
    list.innerHTML = '<div class="empty-priority">Bu ödül için henüz özellik atanmadı.<br>Lütfen önceki adıma dönün.</div>';
    return;
  }

  priorities.forEach((tid, idx) => {
    const t = traitById(tid);
    const award = AWARDS.find(a => a.id === awardId);
    const item = document.createElement('div');
    item.className = 'priority-item';
    item.draggable = true;
    item.dataset.id = tid;
    item.dataset.idx = idx;
    item.innerHTML = `
      <div class="priority-rank rank-${awardId}">${idx + 1}</div>
      <span class="priority-name">${t.emoji} ${t.label}</span>
      <span class="priority-handle">⠿</span>
    `;

    let dragOverItem = null;
    item.addEventListener('dragstart', (e) => {
      item.style.opacity = '.4';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', tid);
    });
    item.addEventListener('dragend', () => { item.style.opacity = ''; });
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      dragOverItem = idx;
      item.classList.add('drag-over-priority');
    });
    item.addEventListener('dragleave', () => item.classList.remove('drag-over-priority'));
    item.addEventListener('drop', (e) => {
      e.preventDefault();
      const fromId = e.dataTransfer.getData('text/plain');
      const fromIdx = state.priorities[awardId].indexOf(fromId);
      const toIdx = idx;
      if (fromIdx === toIdx) return;
      const pris = state.priorities[awardId];
      pris.splice(fromIdx, 1);
      pris.splice(toIdx, 0, fromId);
      renderTab(awardId);
    });

    list.appendChild(item);
  });
}

// ─── ALGORITHM ENGINE (Step 7) ──────────────────────────────────────────────
function runAlgorithm() {
  const scores = {};
  CHARACTERS.forEach(c => { scores[c.id] = { uni: 0, viral: 0, trouble: 0 }; });

  AWARDS.forEach(award => {
    const priorities = state.priorities[award.id] || state.assignments[award.id] || [];
    const totalTraits = priorities.length;
    priorities.forEach((tid, idx) => {
      const weight = totalTraits - idx; // higher priority = higher weight
      const trait = traitById(tid);
      CHARACTERS.forEach(c => {
        // Check if character has this trait
        const charTraitList = CHAR_TRAITS[c.id] || [];
        if (charTraitList.includes(tid)) {
          scores[c.id][award.id] += trait.scores[award.id] * weight;
        }
      });
    });
  });

  // Pick winner per award
  AWARDS.forEach(award => {
    let best = null, bestScore = -1;
    CHARACTERS.forEach(c => {
      if (scores[c.id][award.id] > bestScore) {
        bestScore = scores[c.id][award.id];
        best = { char: c, score: bestScore };
      }
    });
    state.algorithmResults[award.id] = best;
  });

  renderResults();
}

function renderResults() {
  const grid = $('#results-grid');
  grid.innerHTML = '';

  AWARDS.forEach((award, idx) => {
    const result = state.algorithmResults[award.id];
    if (!result) return;
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <div class="result-award-badge" style="${award.badgeStyle}">${award.icon} ${award.label}</div>
      <img class="result-img" src="${result.char.img}" alt="${result.char.name}">
      <div class="result-name">${result.char.name}</div>
      <div class="result-score">Algoritma puanı: ${result.score}</div>
    `;
    grid.appendChild(card);
  });

  // Compare section
  const compareList = $('#compare-list');
  compareList.innerHTML = '';
  AWARDS.forEach(award => {
    const algo = state.algorithmResults[award.id];
    const userPick = state.predictions[award.id];
    const isMatch = algo && userPick && algo.char.id === userPick;
    const userChar = userPick ? charById(userPick) : null;
    const row = document.createElement('div');
    row.className = 'compare-row';
    row.innerHTML = `
      <div class="compare-award">${award.icon} ${award.label}</div>
      <div class="compare-you">👤 ${userChar ? userChar.name : 'Seçilmedi'}</div>
      <div class="compare-algo">🤖 ${algo ? algo.char.name : '—'}</div>
      <div class="match-badge ${isMatch ? 'match-yes' : 'match-no'}">${isMatch ? '✓ Uyuştu!' : '✗ Farklı'}</div>
    `;
    compareList.appendChild(row);
  });
}

// ─── CHAR MODAL ─────────────────────────────────────────────────────────────
function openCharModal(charId) {
  const c = charById(charId);
  const modal = $('#char-modal');
  modal.querySelector('.modal-img').src = c.img;
  modal.querySelector('.modal-name').textContent = c.name;
  modal.querySelector('.modal-years').textContent = c.years;
  modal.querySelector('.modal-bio').textContent = c.bio;
  modal.classList.add('open');
}

function closeCharModal() {
  $('#char-modal').classList.remove('open');
}

// ─── STEP RENDERING ─────────────────────────────────────────────────────────
function renderCharactersGrid() {
  const grid = $('#characters-grid');
  grid.innerHTML = '';
  CHARACTERS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.innerHTML = `
      <div class="char-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="char-name">${c.name}</div>
      <div class="char-years">${c.years}</div>
      <div class="char-bio">${c.bio}</div>
      <div class="char-tags">${c.tags.map(t => `<span class="char-tag">${t}</span>`).join('')}</div>
    `;
    card.addEventListener('click', () => openCharModal(c.id));
    grid.appendChild(card);
  });
}

// ─── NAV ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showScreen(1);
  renderCharactersGrid();

  // Build selects for step 4
  AWARDS.forEach(a => buildSelectDropdown(a));

  // Build traits step
  buildTraitsStep();

  // Tabs for step 6
  AWARDS.forEach(a => {
    document.getElementById(`tab-${a.id}`).addEventListener('click', () => renderTab(a.id));
  });

  // Nav buttons
  $('#btn-next').addEventListener('click', () => {
    if (state.currentStep < state.totalSteps) {
      if (state.currentStep === 5) buildFineTune();
      state.currentStep++;
      showScreen(state.currentStep);
    }
  });
  $('#btn-back').addEventListener('click', () => {
    if (state.currentStep > 1) {
      state.currentStep--;
      showScreen(state.currentStep);
    }
  });

  // Modal close
  $('#modal-close-btn').addEventListener('click', closeCharModal);
  $('#char-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('char-modal')) closeCharModal();
  });

  // Restart
  const restartBtn = document.getElementById('btn-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      state.currentStep = 1;
      state.predictions = { uni: '', viral: '', trouble: '' };
      state.assignments = { uni: [], viral: [], trouble: [] };
      state.priorities = { uni: [], viral: [], trouble: [] };
      state.algorithmResults = { uni: null, viral: null, trouble: null };
      $$('.select-value').forEach(el => el.textContent = 'Seç...');
      buildTraitsStep();
      showScreen(1);
    });
  }
});
