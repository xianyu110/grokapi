import json
import re
from datetime import datetime

def update_models():
    """Update README.md with models from models.json"""

    # Read models configuration
    with open("models.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    # Prepare model lists
    zh_list = []
    en_list = []

    for model in data["models"]:
        zh_list.append(f"- **{model['name']}**：{model['description_zh']}")
        en_list.append(f"- **{model['name']}**: {model['description_en']}")

    def replace_block(text, start, end, content):
        """Replace content between markers"""
        pattern = f"{start}[\\s\\S]*?{end}"
        replacement = f"{start}\n" + "\n".join(content) + f"\n{end}"
        return re.sub(pattern, replacement, text)

    # Read current README
    with open("README.md", "r", encoding="utf-8") as f:
        readme = f.read()

    # Update model sections
    readme = replace_block(readme, "<!-- MODELS_ZH_START -->", "<!-- MODELS_ZH_END -->", zh_list)
    readme = replace_block(readme, "<!-- MODELS_EN_START -->", "<!-- MODELS_EN_END -->", en_list)

    # Write updated README
    with open("README.md", "w", encoding="utf-8") as f:
        f.write(readme)

    print(f"✅ Updated README.md with {len(data['models'])} models")
    print(f"   Last updated: {data['updated']}")

if __name__ == "__main__":
    update_models()