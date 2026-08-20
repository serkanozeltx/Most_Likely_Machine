import re

with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Revert app.js character grid HTML
old_char_render = """    card.innerHTML = `
      <div class="char-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="polaroid-text">${c.name}</div>
      <div class="char-bio">${c.bio}</div>
      <div class="char-tags">${c.tags.map(t => `<span class="char-tag">${t}</span>`).join('')}</div>
    `;"""

new_char_render = """    card.innerHTML = `
      <div class="char-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="char-name">${c.name}</div>
      <div class="char-bio">${c.bio}</div>
      <div class="char-tags">${c.tags.map(t => `<span class="char-tag">${t}</span>`).join('')}</div>
    `;"""

app_js = app_js.replace(old_char_render, new_char_render)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Revert char-card
css = re.sub(
    r'\.char-card \{ background: var\(--white\); border-radius: 4px; padding: 12px 12px 42px 12px; box-shadow: 0 4px 15px rgba\(0,0,0,0\.1\); text-align: center; cursor: pointer; transition: var\(--transition\); position: relative; \}',
    '.char-card { background: var(--white); border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow); text-align: left; cursor: pointer; transition: var(--transition); position: relative; }',
    css
)

# Revert char-img-wrap
css = re.sub(
    r'\.char-img-wrap \{\n  border-radius: 4px; overflow: hidden;\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 12px;\n  background: var\(--cream\);\n\}',
    '.char-img-wrap { width: 100%; aspect-ratio: 1; border-radius: 12px; overflow: hidden; margin-bottom: 12px; background: var(--cream); }',
    css
)

# Revert char-img-wrap img
css = css.replace(".char-img-wrap img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.22); }", ".char-img-wrap img { width: 100%; height: 100%; object-fit: cover; }")

# Remove polaroid text
css = css.replace(".polaroid-text { position: absolute; left: 0; right: 0; margin-top: 12px; font-weight: 800; font-size: 1.15rem; color: #1e293b; font-family: 'Comic Sans MS', cursive, sans-serif; }\n", "")

# Revert char-name
css = css.replace(".char-name { display: none; }", ".char-name { font-weight: 800; font-size: 1.1rem; margin-bottom: 4px; color: var(--dark); text-align: center; }")

# Revert char-bio
css = re.sub(
    r'\.char-bio \{ font-size: \.8rem; color: var\(--muted\); margin-top: 36px; margin-bottom: 12px; line-height: 1\.5; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-align: left; \}',
    '.char-bio { font-size: .8rem; color: var(--muted); margin-bottom: 12px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-align: left; }',
    css
)

# Revert result-img
css = css.replace("object-fit: cover;\n  transform: scale(1.22);", "object-fit: cover;")

# Fix screen-11 story card colors
old_story = "#screen-11 .story-card { max-width: 860px; padding: 16px 24px; text-align: left; margin-top: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); }"
new_story = """#screen-11 .story-card { max-width: 860px; padding: 20px 24px; text-align: left; margin-top: 16px; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.1); color: #E2E8F0; }
#screen-11 .story-card h3 { color: #FFFFFF; }
#screen-11 .story-card p { color: #CBD5E1; }
#screen-11 .story-card a { color: #93C5FD; text-decoration: underline; }"""
css = css.replace(old_story, new_story)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
