# Используем официальный образ Python как базовый
FROM python:3.10

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем requirements.txt и устанавливаем зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь код
COPY . .

# Открываем порт 8000
EXPOSE 8000

# Команда для запуска приложения
CMD ["gunicorn", "kaep.wsgi:application", "--bind", "0.0.0.0:8000"]
