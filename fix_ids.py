import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix screen 5
html = html.replace('<div class="step5-error" id="step6-error" style="display:none; max-width:600px; margin: 0 auto 16px;"></div>', '<div class="step5-error" id="step5-error" style="display:none; max-width:600px; margin: 0 auto 16px;"></div>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('app.js', 'r', encoding='utf-8') as f:
    app = f.read()

# For step 6 (which is actually step 6 in UI), it checks traitQueue
app = app.replace("const err = $('#step5-error');\n        err.textContent = 'Lütfen tüm özellikleri bir ödüle atayın.';", "const err = $('#step6-error');\n        err.textContent = 'Lütfen tüm özellikleri bir ödüle atayın.';")
app = app.replace("$('#step5-error').style.display = 'none';", "$('#step5-error').style.display = 'none';\n  $('#step6-error').style.display = 'none';")

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app)
