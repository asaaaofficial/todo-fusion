import os
import replicate
import json
from dotenv import load_dotenv

load_dotenv()

# Inisialisasi client
client = replicate.Client(api_token=os.getenv("REPLICATE_API_TOKEN"))

def zeroshot_prompt(description, todo_list):
    existing_tasks = "\n".join([f"- {item}" for item in todo_list])
    prompt = f"""
Kamu adalah asisten AI untuk aplikasi To-Do List.

Daftar tugas saat ini:
{existing_tasks}

Tugas baru:
{description}

Tolong analisis tugas baru ini: apakah penting, prioritasnya apa, dan tambahkan kategori jika cocok.
"""
    return prompt

def get_answer_using_zeroshot(description, todo_list):
    prompt = zeroshot_prompt(description, todo_list)

    # Panggil model granite
    output = client.run(
        "ibm-granite/granite-3.3-8b-instruct",
        input={"prompt": prompt}
    )

    return "".join(output)

def save_task_to_json(task_data, filename="task.json"):
    try:
        with open(filename, "r") as f:
            data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        data = []

    data.append(task_data)

    with open(filename, "w") as f:
        json.dump(data, f, indent=4)

# Contoh penggunaan
if __name__ == "__main__":
    existing = ["Meeting dengan tim dari jam 10", "Beli bahan makanan", "Buat laporan mingguan"]
    new_task = "Belajar dasar prompt engineering AI untuk malam ini"

    response = get_answer_using_zeroshot(new_task, existing)
    print("Respon dari Granite:\n", response)

    # Manual parsing (sementara kita isi sendiri)
    task = {
        "title": new_task,
        "description": "Pembelajaran penting untuk meningkatkan skill membuat prompt di AI seperti Granite.",
        "priority": "tinggi",
        "category": "pembelajaran",
        "done": False
    }

    save_task_to_json(task)
    print("Task berhasil disimpan ke task.json")