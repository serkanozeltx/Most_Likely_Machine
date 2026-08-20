import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix screen-1
css = re.sub(
    r'#screen-1 \{\s*align-items: center;\s*justify-content: center;\s*background: linear-gradient\(160deg, #fff 0%, var\(--cream\) 100%\);\s*\}',
    '#screen-1 {\n  align-items: center;\n  justify-content: flex-start;\n  padding-top: 60px;\n  background: linear-gradient(160deg, #fff 0%, var(--cream) 100%);\n}',
    css
)

# Fix screen-11
css = re.sub(
    r'#screen-11 \{\s*align-items: center; justify-content: center;\s*background: linear-gradient\(160deg, var\(--dark\) 0%, #334155 100%\);\s*color: white;\s*\}',
    '#screen-11 {\n  align-items: center; justify-content: flex-start; padding-top: 60px;\n  background: linear-gradient(160deg, var(--dark) 0%, #334155 100%);\n  color: white;\n}',
    css
)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

