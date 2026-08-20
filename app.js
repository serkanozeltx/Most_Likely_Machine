// ─── DATA ──────────────────────────────────────────────────────────────────
const STUDENT_PROFILES = [
  { profileId: 'zeynep', gender: 'kız', img: 'characters/zeynep.jpg', bio: 'Sınıfın en yaratıcı öğrencisi. Her projede farklı bir fikir üretiyor ve grup çalışmalarına renk katıyor.', tags: ['Yaratıcı', 'Kararlı', 'Çok Yönlü'], traitKey: 'zeynep' },
  { profileId: 'azra', gender: 'kız', img: 'characters/azra.jpg', bio: 'Sınıfın en disiplinli ve özverili öğrencisi. Ödevlerini her zaman zamanında teslim eder, arkadaşlarına da yardım eder.', tags: ['Disiplinli', 'Özverili', 'Güvenilir'], traitKey: 'azra' },
  { profileId: 'nehir', gender: 'kız', img: 'characters/nehir.jpg', bio: 'Macerayı seven ve cesur kararlar alabilen enerjik bir öğrenci. Okul gezilerinde herkese yön gösteriyor.', tags: ['Maceracı', 'Gözüpek', 'Enerjik'], traitKey: 'nehir' },
  { profileId: 'yagmur', gender: 'kız', img: 'characters/yagmur.jpg', bio: 'Sınıf başkanı. Söz söyleme gücü ve ikna kabiliyetiyle herkesi etrafında topluyor.', tags: ['Etkili', 'Stratejik', 'Büyüleyici'], traitKey: 'yagmur' },
  { profileId: 'beren', gender: 'kız', img: 'characters/beren.jpg', bio: 'Ne kadar zor olursa olsun pes etmeyen, azimli bir öğrenci. Sporda ve derslerde aynı kararlılığı gösteriyor.', tags: ['Azimli', 'Kararlı', 'Dayanıklı'], traitKey: 'beren' },
  { profileId: 'yusuf', gender: 'erkek', img: 'characters/yusuf.jpg', bio: 'Sınıfın doğal lideri. Arkadaşlarını dinler, onları motive eder ve ortak hedefler doğrultusunda organize eder.', tags: ['Lider', 'Cesur', 'Kararlı'], traitKey: 'yusuf' },
  { profileId: 'eymen', gender: 'erkek', img: 'characters/eymen.jpg', bio: 'Resim yapmayı ve yeni şeyler keşfetmeyi seven yaratıcı bir öğrenci. Her konuda özgün fikirleri var.', tags: ['Yaratıcı', 'Disiplinli', 'Özgün'], traitKey: 'eymen' },
  { profileId: 'omer', gender: 'erkek', img: 'characters/omer.jpg', bio: 'Okulun en iyi basketbolcusu. Takım ruhuna inanan, azimle çalışan enerjik bir öğrenci.', tags: ['Atletik', 'Enerjik', 'Takım Oyuncusu'], traitKey: 'omer' },
  { profileId: 'kerem', gender: 'erkek', img: 'characters/kerem.jpg', bio: 'Sınıfın neşe kaynağı! Esprileriyle herkesi güldürüyor, zor anlarda bile pozitif kalmayı biliyor.', tags: ['Neşeli', 'Uyumlu', 'Büyüleyici'], traitKey: 'kerem' },
  { profileId: 'arda', gender: 'erkek', img: 'characters/arda.jpg', bio: 'Teknolojiyi ve bilimi seven, her şeyin nasıl çalıştığını merak eden bir öğrenci. Bilim fuarlarında hep birinci oluyor.', tags: ['Yenilikçi', 'Meraklı', 'Bağımsız'], traitKey: 'arda' }
];

let CHARACTERS = [];

const AWARDS = [
  { id: 'uni', label: 'Geleceği Tasarlayan', icon: '🎓', chipClass: 'chip-uni', colClass: 'award-col-uni', badgeStyle: 'background:var(--award-uni-light);color:var(--award-uni)' },
  { id: 'viral', label: 'İz Bırakan', icon: '✨', chipClass: 'chip-viral', colClass: 'award-col-viral', badgeStyle: 'background:var(--award-viral-light);color:var(--award-viral)' },
  { id: 'trouble', label: 'Ezber Bozan', icon: '⚡', chipClass: 'chip-trouble', colClass: 'award-col-trouble', badgeStyle: 'background:var(--award-trouble-light);color:var(--award-trouble)' }
];

const TRAITS = [
  { id: 'uyumlu',      label: 'Uyumlu',        emoji: '🤝', scores: { uni: 5, viral: 2, trouble: 1 } },
  { id: 'cesur',       label: 'Cesur',          emoji: '🦁', scores: { uni: 4, viral: 3, trouble: 2 } },
  { id: 'yaratici',    label: 'Yaratıcı',       emoji: '🎨', scores: { uni: 5, viral: 3, trouble: 1 } },
  { id: 'kararli',     label: 'Kararlı',        emoji: '💪', scores: { uni: 5, viral: 2, trouble: 2 } },
  { id: 'bagimsiz',    label: 'Bağımsız',       emoji: '🦅', scores: { uni: 4, viral: 3, trouble: 3 } },
  { id: 'muzik',     label: 'Müzik Kulağı Olan',        emoji: '🎵', scores: { uni: 3, viral: 4, trouble: 1 } },
  { id: 'ozguvenli',    label: 'Özgüvenli',       emoji: '⭐', scores: { uni: 3, viral: 4, trouble: 3 } },
  { id: 'rolyetenekli',     label: 'Rol Yeteneği Yüksek',        emoji: '🎭', scores: { uni: 3, viral: 5, trouble: 2 } },
  { id: 'cigiracici',  label: 'Çığır Açan',     emoji: '🚀', scores: { uni: 5, viral: 4, trouble: 1 } },

  { id: 'maceraci',    label: 'Maceracı',       emoji: '🧭', scores: { uni: 2, viral: 5, trouble: 3 } },
  { id: 'atletik',     label: 'Atletik',        emoji: '🏃', scores: { uni: 2, viral: 5, trouble: 2 } },
  { id: 'stratejik',     label: 'Stratejik',        emoji: '🧮', scores: { uni: 4, viral: 3, trouble: 3 } },
  { id: 'adanmis',     label: 'Adanmış',        emoji: '🎯', scores: { uni: 3, viral: 4, trouble: 1 } },
  { id: 'gozupek',     label: 'Gözüpek',        emoji: '🔥', scores: { uni: 1, viral: 5, trouble: 4 } },
  { id: 'meydanokuyan',label: 'Meydan Okuyan',  emoji: '⚡', scores: { uni: 1, viral: 4, trouble: 5 } },
  { id: 'disiplinli',  label: 'Disiplinli',     emoji: '📐', scores: { uni: 5, viral: 3, trouble: 1 } },
  { id: 'komik',       label: 'Komik',          emoji: '😂', scores: { uni: 1, viral: 5, trouble: 3 } },
  { id: 'etkili',      label: 'Etkili',         emoji: '👑', scores: { uni: 4, viral: 5, trouble: 2 } },

  { id: 'mucadeceli',   label: 'Mücadele Eden',      emoji: '💥', scores: { uni: 1, viral: 3, trouble: 5 } },
  { id: 'buyuleyici',  label: 'Büyüleyici',     emoji: '✨', scores: { uni: 3, viral: 5, trouble: 2 } },
  { id: 'ozverili',    label: 'Özverili',       emoji: '🤲', scores: { uni: 4, viral: 2, trouble: 1 } },
  { id: 'azimli',      label: 'Azimli',         emoji: '🔨', scores: { uni: 4, viral: 3, trouble: 3 } },
  { id: 'cokdilli',    label: 'Çok Dilli',      emoji: '🌍', scores: { uni: 5, viral: 3, trouble: 1 } },
  { id: 'sakaci',      label: 'Şakacı',         emoji: '🃏', scores: { uni: 1, viral: 4, trouble: 4 } },
  { id: 'pesetmeyen',     label: 'Pes Etmeyen',        emoji: '🐺', scores: { uni: 2, viral: 3, trouble: 5 } },
  { id: 'tavizvermeyen',        label: 'Taviz Vermeyen',           emoji: '🪨', scores: { uni: 1, viral: 2, trouble: 5 } },
  { id: 'tutkulu',      label: 'Tutkulu',         emoji: '🔥', scores: { uni: 1, viral: 2, trouble: 5 } }
];

const CHAR_TRAITS = {
  zeynep:  ['yaratici', 'kararli', 'cigiracici', 'bagimsiz', 'rolyetenekli', 'etkili', 'cokdilli', 'adanmis'],
  azra:    ['disiplinli', 'ozverili', 'adanmis', 'uyumlu', 'azimli', 'pesetmeyen', 'kararli', 'stratejik'],
  nehir:   ['maceraci', 'gozupek', 'cesur', 'atletik', 'tutkulu', 'bagimsiz', 'meydanokuyan', 'cigiracici'],
  yagmur:  ['etkili', 'stratejik', 'buyuleyici', 'kararli', 'adanmis', 'rolyetenekli', 'disiplinli', 'cokdilli'],
  beren:   ['azimli', 'kararli', 'pesetmeyen', 'disiplinli', 'cesur', 'gozupek', 'adanmis', 'mucadeceli'],
  yusuf:   ['kararli', 'cesur', 'etkili', 'azimli', 'adanmis', 'stratejik', 'disiplinli', 'bagimsiz'],
  eymen:   ['yaratici', 'disiplinli', 'stratejik', 'muzik', 'rolyetenekli', 'buyuleyici', 'cesur', 'adanmis'],
  omer:    ['atletik', 'gozupek', 'pesetmeyen', 'cesur', 'azimli', 'maceraci', 'meydanokuyan', 'disiplinli'],
  kerem:   ['komik', 'uyumlu', 'buyuleyici', 'rolyetenekli', 'sakaci', 'etkili', 'bagimsiz', 'adanmis'],
  arda:    ['cigiracici', 'bagimsiz', 'azimli', 'yaratici', 'stratejik', 'meydanokuyan', 'disiplinli', 'cesur']
};

const GIRL_NAMES = ['ZEYNEP','ZEHRA','AZRA','NEHİR','YAĞMUR','NİSANUR','ASYA','RABİA','BELİNAY','BEREN','AYŞE','SÜMEYYE','ÖYKÜ','BETÜL','ZÜMRA','ESİLA','ADA','NİSA','EMİNE','YAREN','AYŞEGÜL','BEYZA','ELİF SU','NİSA NUR','TUANA','ELİF NAZ','ASMİN','AYSİMA','AYŞENUR','SARE','BERFİN','ARİN','BAHAR','ESMA NUR','RAVZA','BERRA','HATİCE KÜBRA','ESRA','ELİFSU','RÜMEYSA','ŞEYMA','ALYA','ŞEVVAL','NAZLI','ASLI','SEMANUR','TUĞBA','SUDENAZ','BERİL','AYLİN','SILA','YASEMİN','ALEYNA','SUDE','RUMEYSA','SENA','SELİN','SİNEM','SUDE NAZ','PINAR','ÖZLEM','TUĞÇE'];
const BOY_NAMES = ['YUSUF','EYMEN','MUSTAFA','ÖMER','MİRAÇ','AYAZ','AHMET','MUHAMMED','MEHMET','KEREM','MUHAMMED ALİ','YİĞİT','YUNUS EMRE','İBRAHİM','ENES','POYRAZ','HÜSEYİN','EMİRHAN','FURKAN','UMUT','HASAN','MUHAMMED EMİN','ÖMER ASAF','RÜZGAR','ARDA','YASİN','TALHA','BARAN','ERTUĞRUL','MEHMET ALİ','YAĞIZ','YUSUF EYMEN','SELİM','METEHAN','RAMAZAN','MUHAMMED MUSTAFA','MURAT','MUHAMMED ENES','OSMAN','YAVUZ SELİM','EFE','HALİL İBRAHİM','BARIŞ','FATİH','HALİL','SÜLEYMAN'];

const ARGO_LIST = ['sik','orospu','göt','amk','bok','yarrak','oç','piç','pezevenk','kahpe','gerizekal','dangalak'];

function containsArgo(text) {
  const lower = text.toLowerCase();
  return ARGO_LIST.some(w => lower.includes(w));
}

let state = {
  currentStep: 1,
  totalSteps: 11,
    selectedGirlNames: [],
  selectedBoyNames: [],
  predictions: { uni: '', viral: '', trouble: '' },
  assignments: { uni: [], viral: [], trouble: [] },
  priorities: { uni: [], viral: [], trouble: [] },
  algorithmResults: { uni: null, viral: null, trouble: null }
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const charById = (id) => CHARACTERS.find(c => c.id === id);
const traitById = (id) => TRAITS.find(t => t.id === id);

function buildCharacters(girlNames, boyNames) {
  const girls = STUDENT_PROFILES.filter(p => p.gender === 'kız');
  const boys = STUDENT_PROFILES.filter(p => p.gender === 'erkek');
  CHARACTERS = [
    ...girls.map((p, i) => ({ ...p, id: p.profileId, name: girlNames[i] || p.profileId })),
    ...boys.map((p, i) => ({ ...p, id: p.profileId, name: boyNames[i] || p.profileId }))
  ];
}


function renderNameChips() {
  const girlChips = $('#girl-chips');
  const boyChips = $('#boy-chips');
  girlChips.innerHTML = '';
  boyChips.innerHTML = '';
  
  const searchVal = ($('#name-search').value || '').trim().toLowerCase();
  
  GIRL_NAMES.forEach(name => {
    if (searchVal && !name.toLowerCase().includes(searchVal)) return;
    const chip = document.createElement('div');
    chip.className = 'name-chip' + (state.selectedGirlNames.includes(name) ? ' selected-girl' : '');
    if (state.selectedGirlNames.length >= 5 && !state.selectedGirlNames.includes(name)) {
      chip.classList.add('chip-disabled');
    }
    chip.textContent = name;
    chip.addEventListener('click', () => {
      if (state.selectedGirlNames.includes(name)) {
        state.selectedGirlNames = state.selectedGirlNames.filter(n => n !== name);
      } else if (state.selectedGirlNames.length < 5) {
        state.selectedGirlNames.push(name);
      }
      renderNameChips();
    });
    girlChips.appendChild(chip);
  });
  
  BOY_NAMES.forEach(name => {
    if (searchVal && !name.toLowerCase().includes(searchVal)) return;
    const chip = document.createElement('div');
    chip.className = 'name-chip' + (state.selectedBoyNames.includes(name) ? ' selected-boy' : '');
    if (state.selectedBoyNames.length >= 5 && !state.selectedBoyNames.includes(name)) {
      chip.classList.add('chip-disabled');
    }
    chip.textContent = name;
    chip.addEventListener('click', () => {
      if (state.selectedBoyNames.includes(name)) {
        state.selectedBoyNames = state.selectedBoyNames.filter(n => n !== name);
      } else if (state.selectedBoyNames.length < 5) {
        state.selectedBoyNames.push(name);
      }
      renderNameChips();
    });
    boyChips.appendChild(chip);
  });
  
  $('#count-girl').textContent = `👧 Kız: ${state.selectedGirlNames.length} / 5 seçildi`;
  $('#count-boy').textContent = `👦 Erkek: ${state.selectedBoyNames.length} / 5 seçildi`;
  $('#name-selection-error').style.display = 'none';
}

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
  if (step === 8) runAlgorithm();
  if (s) s.scrollTop = 0;
}

function updateNavButtons(step) {
  const backBtn = $('#btn-back');
  const nextBtn = $('#btn-next');
  backBtn.style.display = step === 1 ? 'none' : '';
  if (step === 7) {
    nextBtn.textContent = '🚀 Algoritmayı Çalıştır';
    nextBtn.className = 'btn btn-run';
    nextBtn.style.display = '';
  } else if (step === 11) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.textContent = 'İLERİ ›';
    nextBtn.className = 'btn btn-primary';
    nextBtn.style.display = '';
  }
}

function buildSelectDropdown(award) {
  const sel = document.getElementById(`select-${award.id}`);
  const oldTrigger = sel.querySelector('.select-trigger');
  const dropdown = sel.querySelector('.select-dropdown');
  
  const trigger = oldTrigger.cloneNode(true);
  oldTrigger.parentNode.replaceChild(trigger, oldTrigger);
  
  const selectedSpan = trigger.querySelector('.select-value');
  
  dropdown.innerHTML = '';
  
  CHARACTERS.forEach(c => {
    const opt = document.createElement('div');
    opt.className = 'select-option';
    opt.dataset.value = c.id;
    opt.textContent = c.name;
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
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

const MAX_PER_AWARD = 9;
let traitQueue = [];
let currentTraitIdx = 0;

function buildTraitsStep() {
  state.assignments = { uni: [], viral: [], trouble: [] };
  traitQueue = TRAITS.map(t => t.id);
  currentTraitIdx = 0;
  showCurrentTrait();
  renderAssignColumns();
  
  document.getElementById('assign-uni').onclick = () => assignCurrentTrait('uni');
  document.getElementById('assign-viral').onclick = () => assignCurrentTrait('viral');
  document.getElementById('assign-trouble').onclick = () => assignCurrentTrait('trouble');
  document.getElementById('trait-skip-btn').onclick = () => skipCurrentTrait();
}

function showCurrentTrait() {
  const showcase = document.getElementById('trait-showcase');
  const doneMsg = document.getElementById('trait-done-msg');
  $('#step5-error').style.display = 'none';
  $('#step6-error').style.display = 'none';
  
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
  
  const card = document.getElementById('trait-big-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';
  
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
  traitQueue.push(skipped);
  showCurrentTrait();
}

function removeAssignment(awardId, tid) {
  state.assignments[awardId] = state.assignments[awardId].filter(id => id !== tid);
  if (state.priorities) {
    state.priorities[awardId] = (state.priorities[awardId] || []).filter(id => id !== tid);
  }
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

function buildFineTune() {
  AWARDS.forEach(a => {
    state.priorities[a.id] = [...state.assignments[a.id]];
  });
  renderAllPriorityLists();
}

function renderAllPriorityLists() {
  AWARDS.forEach(award => {
    const listEl = document.getElementById('priority-list-' + award.id);
    if (!listEl) return;
    listEl.innerHTML = '';
    const priorities = state.priorities[award.id];
    
    if (!priorities || priorities.length === 0) {
      listEl.innerHTML = '<div class="empty-priority">Bu ödül için özellik atanmadı.<br>Lütfen önceki adıma dönün.</div>';
      return;
    }
    
    priorities.forEach((tid, idx) => {
      const t = traitById(tid);
      const item = document.createElement('div');
      item.className = 'priority-item';
      item.draggable = true;
      item.dataset.id = tid;
      item.dataset.award = award.id;
      item.innerHTML = `
        <div class="priority-rank rank-${award.id}">${idx + 1}</div>
        <span class="priority-name">${t.emoji} ${t.label}</span>
        <span class="priority-handle">⠿</span>
      `;
      
      item.addEventListener('dragstart', e => {
        item.style.opacity = '.4';
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', tid + '|' + award.id);
      });
      item.addEventListener('dragend', () => item.style.opacity = '');
      item.addEventListener('dragover', e => {
        e.preventDefault();
        item.classList.add('drag-over-priority');
      });
      item.addEventListener('dragleave', () => item.classList.remove('drag-over-priority'));
      item.addEventListener('drop', e => {
        e.preventDefault();
        item.classList.remove('drag-over-priority');
        const data = e.dataTransfer.getData('text/plain').split('|');
        const fromId = data[0], fromAward = data[1];
        if (fromAward !== award.id) return;
        const fromIdx = state.priorities[award.id].indexOf(fromId);
        const toIdx = idx;
        if (fromIdx === toIdx) return;
        const pris = state.priorities[award.id];
        pris.splice(fromIdx, 1);
        pris.splice(toIdx, 0, fromId);
        renderAllPriorityLists();
      });
      
      listEl.appendChild(item);
    });
  });
}

function runAlgorithm() {
  const scores = {};
  CHARACTERS.forEach(c => { scores[c.id] = { uni: 0, viral: 0, trouble: 0 }; });
  
  AWARDS.forEach(award => {
    const priorities = state.priorities[award.id] || state.assignments[award.id] || [];
    const totalTraits = priorities.length;
    priorities.forEach((tid, idx) => {
      const weight = totalTraits - idx;
      const trait = traitById(tid);
      CHARACTERS.forEach(c => {
        const charTraitList = CHAR_TRAITS[c.profileId || c.id] || [];
        if (charTraitList.includes(tid)) {
          scores[c.id][award.id] += trait.scores[award.id] * weight;
        }
      });
    });
  });
  
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
      <div class="result-img-wrapper"><img class="result-img" src="${result.char.img}" alt="${result.char.name}"></div>
      <div class="result-name">${result.char.name}</div>
      <div class="result-score">Algoritma puanı: ${result.score}</div>
    `;
    grid.appendChild(card);
  });
  
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
      <div class="match-badge ${isMatch ? 'match-yes' : 'match-no'}">${isMatch ? '✓ Uyuştu' : '✗ Farklı'}</div>
    `;
    compareList.appendChild(row);
  });
}

function openCharModal(charId) {
  const c = charById(charId);
  if (!c) return;
  const modal = $('#char-modal');
  modal.querySelector('.modal-img').src = c.img;
  modal.querySelector('.modal-name').textContent = c.name;
  modal.querySelector('.modal-years').textContent = '';
  modal.querySelector('.modal-bio').textContent = c.bio;
  modal.classList.add('open');
}

function closeCharModal() {
  $('#char-modal').classList.remove('open');
}

function renderCharactersGrid() {
  const grid = $('#characters-grid');
  grid.innerHTML = '';
  CHARACTERS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.innerHTML = `
      <div class="char-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="char-name">${c.name}</div>
      <div class="char-bio">${c.bio}</div>
      <div class="char-tags">${c.tags.map(t => `<span class="char-tag">${t}</span>`).join('')}</div>
    `;
    card.addEventListener('click', () => openCharModal(c.id));
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildCharacters(['Zeynep','Azra','Nehir','Yağmur','Beren'], ['Yusuf','Eymen','Ömer','Kerem','Arda']);
  showScreen(1);
  renderCharactersGrid();
  renderNameChips();
  
  AWARDS.forEach(a => buildSelectDropdown(a));
  buildTraitsStep();
  

  
  $('#name-search').addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (containsArgo(val)) {
      $('#argo-warning-modal').classList.add('open');
      e.target.value = '';
    }
    renderNameChips();
  });
  
  $('#argo-modal-close').addEventListener('click', () => {
    $('#argo-warning-modal').classList.remove('open');
  });
  
  $('#btn-next').addEventListener('click', () => {

    if (state.currentStep === 3) {
      if (state.selectedGirlNames.length < 5 || state.selectedBoyNames.length < 5) {
        const err = $('#name-selection-error');
        err.textContent = 'Lütfen 5 kız ve 5 erkek ismi seçin.';
        err.style.display = 'block';
        return;
      }
      buildCharacters(state.selectedGirlNames, state.selectedBoyNames);
      renderCharactersGrid();
      AWARDS.forEach(a => buildSelectDropdown(a));
    }
    
    if (state.currentStep === 5) {
      if (!state.predictions.uni || !state.predictions.viral || !state.predictions.trouble) {
        const err = $('#step5-error');
        if (err) {
          err.textContent = 'Lütfen ilerlemeden önce 3 ödül için de tahminini yap.';
          err.style.display = 'block';
        } else {
          alert('Lütfen ilerlemeden önce 3 ödül için de tahminini yap.');
        }
        return;
      }
    }
    if (state.currentStep === 6) {
      if (traitQueue.length > 0) {
        const err = $('#step6-error');
        err.textContent = 'Lütfen tüm özellikleri bir ödüle atayın.';
        err.style.display = 'block';
        return;
      }
    }
    
    if (state.currentStep < state.totalSteps) {
      if (state.currentStep === 6) buildFineTune();
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
  
  $('#modal-close-btn').addEventListener('click', closeCharModal);
  $('#char-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('char-modal')) closeCharModal();
  });
  
  const restartBtn = document.getElementById('btn-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      state.currentStep = 1;
      state.schoolName = '';
      state.selectedGirlNames = [];
      state.selectedBoyNames = [];
      buildCharacters(['Zeynep','Azra','Nehir','Yağmur','Beren'], ['Yusuf','Eymen','Ömer','Kerem','Arda']);
      state.predictions = { uni: '', viral: '', trouble: '' };
      state.assignments = { uni: [], viral: [], trouble: [] };
      state.priorities = { uni: [], viral: [], trouble: [] };
      state.algorithmResults = { uni: null, viral: null, trouble: null };
      $$('.select-value').forEach(el => el.textContent = 'Seç...');
      renderNameChips();
      buildTraitsStep();
      showScreen(1);
    });
  }
});
