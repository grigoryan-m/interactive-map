import os
import re

def update_html_paths(html_file):
    with open(html_file, 'r', encoding='utf-8') as file:
        content = file.read()

    # Заменяем / в начале путей в src и href на пустую строку
    # Только если они начинаются с одинарного /
    content = re.sub(r'(?<=\ssrc=")/([^"]+)"', r'src="\1"', content)
    content = re.sub(r'(?<=\shref=")/([^"]+)"', r'href="\1"', content)

    with open(html_file, 'w', encoding='utf-8') as file:
        file.write(content)

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                html_file = os.path.join(root, file)
                print(f'Обрабатываю: {html_file}')
                update_html_paths(html_file)

# ЗАМЕНИ путь ниже на путь к папке с HTML файлами
directory = '/'
process_directory(directory)
