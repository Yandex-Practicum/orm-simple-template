# Базовый слой
FROM node:15 

# Копируем всё что нужно из локальной папки в образ
COPY app /app

COPY package.json /
COPY package-lock.json /

# Устанавливаем зависимости, в образе появится /node_modules
RUN npm ci --production # npm install

# При старте контейнер начнёт общаться через 80 порт
EXPOSE 80

# При старте контейнер выполнит эту команду – запустит наше приложение
CMD node app/index.js 