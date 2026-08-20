import re

with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Replace image paths in STUDENT_PROFILES
replacements = [
    ("img: 'characters/zeynep.jpg'", "img: 'characters/female_1.jpeg'"),
    ("img: 'characters/azra.jpg'", "img: 'characters/female_2.jpeg'"),
    ("img: 'characters/nehir.jpg'", "img: 'characters/female_3.jpeg'"),
    ("img: 'characters/yagmur.jpg'", "img: 'characters/female_4.jpeg'"),
    ("img: 'characters/beren.jpg'", "img: 'characters/female_5.jpeg'"),
    ("img: 'characters/yusuf.jpg'", "img: 'characters/male_1.jpeg'"),
    ("img: 'characters/eymen.jpg'", "img: 'characters/male_2.jpeg'"),
    ("img: 'characters/omer.jpg'", "img: 'characters/male_3.jpeg'"),
    ("img: 'characters/kerem.jpg'", "img: 'characters/male_4.jpeg'"),
    ("img: 'characters/arda.jpg'", "img: 'characters/male_5.jpeg'"),
]

for old, new in replacements:
    app_js = app_js.replace(old, new)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

