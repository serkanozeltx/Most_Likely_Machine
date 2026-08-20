import re

# ==========================================
# REWRITE APP.JS
# ==========================================
with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# 1. Remove schoolName from state
app_js = app_js.replace("schoolName: '',\n", "")

# 2. Remove updateSchoolName function
app_js = re.sub(r'function updateSchoolName\(name\) \{.*?\n\}\n', '', app_js, flags=re.DOTALL)

# 3. Fix buildSelectDropdown
old_dropdown = """function buildSelectDropdown(award) {
  const sel = document.getElementById(`select-${award.id}`);
  const trigger = sel.querySelector('.select-trigger');
  const dropdown = sel.querySelector('.select-dropdown');
  const selectedSpan = trigger.querySelector('.select-value');
  
  dropdown.innerHTML = '';
  
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
  
  // Clean up old event listeners if any, but since we recreate it's fine for simple implementation
  const newTrigger = trigger.cloneNode(true);
  trigger.parentNode.replaceChild(newTrigger, trigger);
  
  newTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = newTrigger.classList.contains('open');
    $$('.select-trigger').forEach(t => t.classList.remove('open'));
    $$('.select-dropdown').forEach(d => d.classList.remove('open'));
    if (!isOpen) {
      newTrigger.classList.add('open');
      dropdown.classList.add('open');
    }
  });
}"""

new_dropdown = """function buildSelectDropdown(award) {
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
}"""
app_js = app_js.replace(old_dropdown, new_dropdown)

# 4. Remove school logic from event listeners
app_js = app_js.replace("""  $('#school-name-input').addEventListener('blur', (e) => {
    const val = e.target.value.trim();
    if (containsArgo(val)) {
      $('#argo-warning-modal').classList.add('open');
      e.target.value = '';
    }
  });""", "")

app_js = app_js.replace("""    if (state.currentStep === 2) {
      updateSchoolName($('#school-name-input').value.trim());
    }""", "")

app_js = app_js.replace("      $('#school-name-input').value = '';\n", "")

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)


# ==========================================
# REWRITE INDEX.HTML
# ==========================================
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Screen 2 fixes
old_screen_2 = """  <section class="screen" id="screen-2">
    <div class="screen-subtitle">Senaryo</div>
    <h2 class="screen-title">Okula Hoş Geldin!</h2>
    
    <div class="school-name-input-section">
      <div class="school-input-card">
        <div class="school-input-icon">🏫</div>
        <h3>Senin okulun hangisi?</h3>
        <p>Uygulama boyunca senin okulunun adını kullanacağız. Kendi okulunun adını ya da hayalindeki okulu yazabilirsin!</p>
        <div class="school-input-wrap">
          <input type="text" id="school-name-input" placeholder="Okulunun adını yaz..." maxlength="60" autocomplete="off">
          <div class="school-input-hint">Örnek: Atatürk Ortaokulu, Fatih Ortaokulu, Mavi Gökyüzü Ortaokulu...</div>
        </div>
      </div>
    </div>

    <div class="story-card">
      <div class="school-badge">🏫 <span class="school-name-display">Okulun</span> &nbsp;·&nbsp; İstanbul</div>
      <h2>Bir Algoritma Karar Verseydi...</h2>
      <p>
        <span class="school-name-display">Okulun</span>'un yıl sonu ödül töreni yaklaşıyor. Okul müdürü bu yıl çok farklı bir şey denemek istiyor: ödülleri öğrencileri değil, bir <strong>algoritma</strong> belirleyecek!
      </p>"""

new_screen_2 = """  <section class="screen" id="screen-2">
    <div class="screen-subtitle">Senaryo</div>
    <h2 class="screen-title">Okula Hoş Geldin!</h2>
    
    <div class="story-card" style="margin-top: 20px;">
      <div class="school-image-banner">
        <img src="characters/school.jpg" alt="Okul" />
      </div>
      <h2>Bir Algoritma Karar Verseydi...</h2>
      <p>
        Okulunun yıl sonu ödül töreni yaklaşıyor. Okul müdürü bu yıl çok farklı bir şey denemek istiyor: ödülleri öğretmenler değil, bir <strong>yapay zeka algoritması</strong> belirleyecek!
      </p>"""
html = html.replace(old_screen_2, new_screen_2)

# Screen 3 texts
html = html.replace("Sınıfındaki 10 öğrencinin isimlerini seç — 5 kız, 5 erkek. İstediğin isimlere tıkla!", "Sınıfındaki 10 öğrencinin isimlerini seç — 5 kız, 5 erkek. İstediğin isimlere tıkla!<br><small style='color:var(--muted);display:block;margin-top:8px;'>* Buradaki isimler, 2010-2015 yıllarında doğmuş çocuklara Türkiye'de en çok verilen isimlerden derlenmiştir.</small>")
html = html.replace("👧 Kız İsimleri", "👩 Kız İsimleri")
html = html.replace("👦 Erkek İsimleri", "👨 Erkek İsimleri")
html = html.replace("👧 Kız:", "👩 Kız:")
html = html.replace("👦 Erkek:", "👨 Erkek:")

# Screen 8 Compare fixes
old_compare = """    <div class="compare-section">
      <h3>📊 Senin Tahminlerin — Algoritmanın Kararı</h3>
      <div id="compare-list"></div>
      <div class="compare-legend">
        <span class="match-badge match-yes">✓ Uyuştu</span> Hem sen hem algoritma aynı öğrenciyi seçti!
        &nbsp;&nbsp;
        <span class="match-badge match-no">✗ Farklı</span> Algoritma farklı düşündü — neden acaba?
      </div>
    </div>"""
new_compare = """    <div class="compare-section">
      <h3>📊 Senin Tahminlerin — Algoritmanın Kararı</h3>
      <div class="compare-header">
        <div class="compare-col-blank"></div>
        <div class="compare-col-you">👤 Senin Tahminin</div>
        <div class="compare-col-algo">🤖 Algoritmanın Kararı</div>
        <div class="compare-col-status">Sonuç</div>
      </div>
      <div id="compare-list"></div>
      <div class="compare-legend">
        <span class="match-badge match-yes">✓ Uyuştu</span> Hem sen hem algoritma aynı öğrenciyi seçti!
        &nbsp;&nbsp;
        <span class="match-badge match-no">✗ Farklı</span> Algoritma farklı düşündü — neden acaba?
      </div>
    </div>"""
html = html.replace(old_compare, new_compare)

# Screen 10 Siyah -> Siyahi
html = html.replace("Siyah hastalar bu", "Siyahi hastalar bu")
# Screen 10 Alignment
html = html.replace("""<div class="reflection-layout">
      <div style="display:flex;flex-direction:column;gap:16px;">""", """<div class="reflection-layout" style="align-items:start;">
      <div style="display:flex;flex-direction:column;gap:16px;flex:1;">""")
html = html.replace("""      <div>
        <div class="example-box" style="margin-bottom:16px;">""", """      <div style="display:flex;flex-direction:column;gap:16px;flex:1;">
        <div class="example-box">""")

# Screen 11 Fixes
html = html.replace("Uyarlama: <strong>Dr. Serkan Özel</strong>", "Uyarlama: Dr. Serkan Özel")
html = html.replace("🎓 Uyarlama: Dr. Serkan Özel", "Uyarlama: Dr. Serkan Özel")
html = html.replace("""<section class="screen" id="screen-11">
    <h1>🎉</h1>
    <p>Kendi algoritmani yazdın, sonuçları gördün ve algoritmik ön yargının gerçek hayattaki etkilerini keşfettin. Artık daha bilinçli bir teknoloji kullanıcısısın!</p>""", """<section class="screen" id="screen-11">
    <h2 style="font-size:2rem;margin-bottom:8px;">🎉 Tebrikler!</h2>
    <p style="margin-bottom:20px;max-width:600px;">Kendi algoritmani yazdın, sonuçları gördün ve algoritmik ön yargının etkilerini keşfettin. Artık daha bilinçli bir teknoloji kullanıcısısın!</p>""")
html = html.replace("""<div class="story-card" style="max-width:860px;margin-top:10px;">
      <p style="font-size:.78rem;color:var(--muted);margin-bottom:12px;">Uyarlama: Dr. Serkan Özel — Boğaziçi Üniversitesi</p>
      <h3 style="font-size:.85rem;font-weight:900;">Telif Hakkı ve Atıf Bildirimi</h3>""", """<div class="story-card" style="max-width:860px;margin-top:10px;padding:16px 24px;">
      <h3 style="font-size:.85rem;font-weight:900;margin-bottom:6px;">Telif Hakkı ve Atıf Bildirimi</h3>""")
html = html.replace("""Original Work Copyright © Artefact Group. Licensed under <a target="_blank" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.</p>
    </div>""", """Original Work Copyright © Artefact Group. Licensed under <a target="_blank" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.</p>
      <p style="font-size:.75rem;color:var(--muted);margin-top:12px;border-top:1px solid var(--border);padding-top:12px;">
        Uyarlama: <strong>Dr. Serkan Özel</strong> — Boğaziçi Üniversitesi
      </p>
    </div>""")


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# ==========================================
# REWRITE STYLE.CSS
# ==========================================
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add image cropping for character images to hide AI text at the bottom
if ".char-img-wrap img {" in css:
    css = css.replace(".char-img-wrap img {\n  width: 100%; height: 100%;\n  object-fit: cover;\n}", ".char-img-wrap img {\n  width: 100%; height: 110%;\n  object-fit: cover; object-position: top;\n}")
else:
    css += "\n.char-img-wrap img { height: 110% !important; object-position: top !important; }\n"

if ".result-img {" in css:
    css = css.replace(".result-img {\n  width: 80px; height: 80px; border-radius: 50%;\n  object-fit: cover; border: 3px solid var(--white);\n  box-shadow: var(--shadow); margin: 0 auto 12px;\n}", ".result-img {\n  width: 80px; height: 80px; border-radius: 50%;\n  object-fit: cover; object-position: top; border: 3px solid var(--white);\n  box-shadow: var(--shadow); margin: 0 auto 12px;\n}")

if ".modal-img {" in css:
    css = css.replace(".modal-img {\n  width: 120px; height: 120px; border-radius: 50%;\n  object-fit: cover; border: 4px solid var(--white);\n  box-shadow: var(--shadow); margin: -60px auto 16px;\n  background: var(--cream);\n}", ".modal-img {\n  width: 120px; height: 120px; border-radius: 50%;\n  object-fit: cover; object-position: top; border: 4px solid var(--white);\n  box-shadow: var(--shadow); margin: -60px auto 16px;\n  background: var(--cream);\n}")

# Update Name chips colors
css = css.replace(".name-count-girl { background: #FCE7F3; color: #BE185D; }", ".name-count-girl { background: #EEF2FF; color: #4338CA; }")
css = css.replace(".name-count-boy { background: #DBEAFE; color: #1D4ED8; }", ".name-count-boy { background: #F0FDF4; color: #15803D; }")
css = css.replace(".name-gender-title.girl-title { color: #BE185D; }", ".name-gender-title.girl-title { color: #4338CA; }")
css = css.replace(".name-gender-title.boy-title { color: #1D4ED8; }", ".name-gender-title.boy-title { color: #15803D; }")
css = css.replace(".name-chip.selected-girl { background: #FCE7F3; border-color: #BE185D; color: #BE185D; }", ".name-chip.selected-girl { background: #EEF2FF; border-color: #4338CA; color: #4338CA; }")
css = css.replace(".name-chip.selected-boy { background: #DBEAFE; border-color: #1D4ED8; color: #1D4ED8; }", ".name-chip.selected-boy { background: #F0FDF4; border-color: #15803D; color: #15803D; }")

# Update Compare Table
css += """
.compare-header {
  display: grid;
  grid-template-columns: 180px 1fr 1fr 120px;
  gap: 16px;
  padding: 10px 16px;
  font-weight: 800;
  color: var(--muted);
  font-size: 0.85rem;
  border-bottom: 2px solid var(--border);
  margin-bottom: 12px;
}
.compare-row {
  display: grid;
  grid-template-columns: 180px 1fr 1fr 120px;
  gap: 16px;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-bottom: 8px;
  background: var(--white);
}
.compare-you, .compare-algo {
  font-weight: 700;
  font-size: 1rem;
}
.compare-you { color: #4338CA; }
.compare-algo { color: #0D9488; }
.school-image-banner {
  margin: -32px -32px 24px -32px;
  border-radius: var(--radius) var(--radius) 0 0;
  overflow: hidden;
  height: 200px;
}
.school-image-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
"""

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

