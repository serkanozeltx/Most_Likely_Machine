import re

with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# 1. Screen 5 validation
validation_code = """
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
"""
app_js = app_js.replace("if (state.currentStep === 6) {", validation_code + "    if (state.currentStep === 6) {")

# 2. Add polaroid name dynamically in renderCharactersGrid
old_char_render = """    card.innerHTML = `
      <div class="char-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="char-name">${c.name}</div>
      <div class="char-bio">${c.bio}</div>
      <div class="char-tags">${c.tags.map(t => `<span class="char-tag">${t}</span>`).join('')}</div>
    `;"""

new_char_render = """    card.innerHTML = `
      <div class="char-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="polaroid-text">${c.name}</div>
      <div class="char-bio">${c.bio}</div>
      <div class="char-tags">${c.tags.map(t => `<span class="char-tag">${t}</span>`).join('')}</div>
    `;"""
app_js = app_js.replace(old_char_render, new_char_render)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)


with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Screen 2 story card width & padding
html = html.replace('<div class="story-card" style="margin-top: 20px;">', '<div class="story-card" style="margin-top: 10px; max-width: 900px;">')

# 2. Screen 3 Error element move to top & Screen 5 error element add
old_s3 = """<div class="name-selection-error" id="name-selection-error" style="display:none"></div>
    </div>
  </section>"""
new_s3 = """</div>
  </section>"""
html = html.replace(old_s3, new_s3)

old_counts = """<div class="name-picker-counts">"""
new_counts = """<div class="name-selection-error" id="name-selection-error" style="display:none; margin-bottom:16px;"></div>
      <div class="name-picker-counts">"""
html = html.replace(old_counts, new_counts)

old_s5 = """<h2 class="screen-title">Tahminini Yap</h2>
    <div class="predictions-layout">"""
new_s5 = """<h2 class="screen-title">Tahminini Yap</h2>
    <div class="step5-error" id="step5-error" style="display:none; max-width:600px; margin: 0 auto 16px;"></div>
    <div class="predictions-layout">"""
html = html.replace(old_s5, new_s5)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Screen 2 Padding
css = css.replace(".screen { padding: 40px 32px 100px; }", ".screen { padding: 20px 32px 100px; }")

# 2. Polaroid CSS
css = css.replace(".char-img-wrap img { width: 100%; height: 115%; object-fit: cover; object-position: top; object-position: top; margin-top: 0; }", ".char-img-wrap img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.22); }")
css = css.replace(".char-img-wrap {", ".char-img-wrap {\n  border-radius: 4px;")
css = css.replace(".char-card {\n  background: var(--white);\n  border-radius: var(--radius);\n  padding: 16px;\n  box-shadow: var(--shadow);\n  text-align: left;\n  cursor: pointer;\n  transition: var(--transition);\n}", ".char-card {\n  background: var(--white);\n  border-radius: 4px;\n  padding: 12px 12px 42px 12px;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition);\n  position: relative;\n}")
css = css.replace(".char-name { font-weight: 800; font-size: .9rem; margin-bottom: 2px; }", ".polaroid-text { position: absolute; left: 0; right: 0; margin-top: 12px; font-weight: 800; font-size: 1.15rem; color: #1e293b; font-family: 'Comic Sans MS', cursive, sans-serif; }\n.char-name { display: none; }")
css = css.replace(".char-bio { font-size: .8rem; color: var(--muted); margin-bottom: 12px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }", ".char-bio { font-size: .8rem; color: var(--muted); margin-top: 40px; margin-bottom: 12px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-align: left; }")

css = css.replace(".result-img {\n  width: 90px; height: 90px;\n  border-radius: 50%;\n  object-fit: cover; object-position: top; border: 3px solid var(--white);\n  box-shadow: var(--shadow); margin: 0 auto 12px;\n}", ".result-img {\n  width: 90px; height: 90px;\n  border-radius: 50%;\n  object-fit: cover; transform: scale(1.22); border: 3px solid var(--white);\n  box-shadow: var(--shadow); margin: 0 auto 12px;\n}")

css = css.replace(".modal-img {\n  width: 120px; height: 120px; border-radius: 50%;\n  object-fit: cover; object-position: top; margin: 0 auto 16px; border: 4px solid var(--cream);\n  box-shadow: var(--shadow);\n  display: block;\n}", ".modal-img {\n  width: 120px; height: 120px; border-radius: 50%;\n  object-fit: cover; transform: scale(1.22); margin: 0 auto 16px; border: 4px solid var(--cream);\n  box-shadow: var(--shadow);\n  display: block;\n}")

# 3. Screen 11 tight layout
css = css.replace("#screen-11 h1 {\n  font-size: 2.8rem; font-weight: 900;\n  background: linear-gradient(135deg, var(--gold), var(--red-light));\n  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;\n  margin-bottom: 16px;\n}", "#screen-11 h2 {\n  font-size: 1.8rem !important; margin-bottom: 8px !important;\n}")
css = css.replace("#screen-11 > p { font-size: 1.05rem; color: #94A3B8; max-width: 520px; line-height: 1.7; margin: 0 auto 32px; }", "#screen-11 > p { font-size: .95rem; color: #94A3B8; max-width: 600px; line-height: 1.5; margin: 0 auto 16px; }")

css = css.replace(".final-points {\n  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;\n  width: 100%;\n}", ".final-points {\n  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;\n  width: 100%; margin-bottom: 8px;\n}")
css = css.replace(".final-point {\n  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);\n  border-radius: var(--radius); padding: 24px;\n}", ".final-point {\n  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);\n  border-radius: var(--radius); padding: 16px 12px;\n}")
css = css.replace(".fp-icon { font-size: 2rem; margin-bottom: 12px; }", ".fp-icon { font-size: 1.6rem; margin-bottom: 8px; }")
css = css.replace(".final-point h4 { font-size: 1rem; margin-bottom: 8px; color: white; }", ".final-point h4 { font-size: .9rem; margin-bottom: 6px; color: white; }")
css = css.replace(".final-point p { font-size: .85rem; color: #94A3B8; line-height: 1.5; }", ".final-point p { font-size: .78rem; color: #94A3B8; line-height: 1.4; }")

css = css.replace("#screen-11 .btn-restart {\n  background: linear-gradient(135deg, var(--red), var(--gold));\n  color: white; box-shadow: 0 4px 20px rgba(230,57,70,.3);\n}", "#screen-11 .btn-restart {\n  background: linear-gradient(135deg, var(--red), var(--gold));\n  color: white; box-shadow: 0 4px 20px rgba(230,57,70,.3);\n  padding: 10px 24px; font-size: 1rem; margin-bottom: 8px;\n}")
css = css.replace("#screen-11 .story-card { max-width: 860px; padding: 24px 32px; text-align: left; margin-top: 10px; }", "#screen-11 .story-card { max-width: 860px; padding: 16px 24px; text-align: left; margin-top: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); }")


with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

