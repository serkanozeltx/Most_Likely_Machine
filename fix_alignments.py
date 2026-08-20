import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace display: block; with text-align: center; for specific classes
replacements = [
    (r'\.char-name \{ font-weight: 800; font-size: 1\.1rem; margin-bottom: 4px; color: var\(--dark\); display: block; \}',
     '.char-name { font-weight: 800; font-size: 1.1rem; margin-bottom: 4px; color: var(--dark); text-align: center; }'),
    
    (r'\.trait-done-msg \{ display: block; margin-bottom: 24px; \}',
     '.trait-done-msg { text-align: center; margin-bottom: 24px; }'),
    
    (r'\.empty-priority \{ font-size: \.9rem; color: var\(--muted\); display: block; padding: 32px; \}',
     '.empty-priority { font-size: .9rem; color: var(--muted); text-align: center; padding: 32px; }'),
    
    (r'  box-shadow: var\(--shadow\);\n  display: block;\n  animation: popIn \.5s cubic-bezier\(\.34,1\.56,\.64,1\) both;\n\}',
     '  box-shadow: var(--shadow);\n  text-align: center;\n  animation: popIn .5s cubic-bezier(.34,1.56,.64,1) both;\n}'),
    
    (r'  max-width: 680px; margin: 0 auto; display: block;\n\}',
     '  max-width: 680px; margin: 0 auto; text-align: center;\n}'),
    
    (r'  outline: none; transition: var\(--transition\); display: block;\n\}',
     '  outline: none; transition: var(--transition); text-align: center;\n}'),
    
    (r'  display: block; margin-top: 16px; border: 1px solid #FECACA;\n\}',
     '  text-align: center; margin-top: 16px; border: 1px solid #FECACA;\n}'),
    
    (r'  max-width: 700px; display: block; margin: 0 auto 16px;\n',
     '  max-width: 700px; text-align: center; margin: 0 auto 16px;\n')
]

for old, new in replacements:
    css = re.sub(old, new, css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

