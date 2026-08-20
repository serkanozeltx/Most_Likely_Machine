import re

# FIX APP.JS result-img wrapper
with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

app_js = app_js.replace(
    '<img class="result-img" src="${result.char.img}" alt="${result.char.name}">',
    '<div class="result-img-wrapper"><img class="result-img" src="${result.char.img}" alt="${result.char.name}"></div>'
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

# FIX INDEX.HTML modal-img wrapper
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace(
    '<img class="modal-img" src="" alt="">',
    '<div class="modal-img-wrapper"><img class="modal-img" src="" alt=""></div>'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# FIX STYLE.CSS
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix result-img
css = css.replace(".result-img {\n  width: 90px; height: 90px;\n  border-radius: 50%;\n  object-fit: cover; transform: scale(1.22); border: 3px solid var(--white);\n  box-shadow: var(--shadow); margin: 0 auto 12px;\n}", 
"""
.result-img-wrapper {
  width: 90px; height: 90px;
  border-radius: 50%;
  margin: 0 auto 12px;
  border: 3px solid var(--white);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.result-img {
  width: 100%; height: 100%;
  object-fit: cover;
  transform: scale(1.22);
}
""")

# Fix modal-img
css = css.replace(".modal-img {\n  width: 120px; height: 120px; border-radius: 50%;\n  object-fit: cover; transform: scale(1.22); margin: 0 auto 16px; border: 4px solid var(--cream);\n  box-shadow: var(--shadow);\n  display: block;\n}",
"""
.modal-img-wrapper {
  width: 120px; height: 120px;
  border-radius: 50%;
  margin: -60px auto 16px;
  border: 4px solid var(--cream);
  box-shadow: var(--shadow);
  overflow: hidden;
  background: var(--cream);
}
.modal-img {
  width: 100%; height: 100%;
  object-fit: cover;
  transform: scale(1.22);
}
""")

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

