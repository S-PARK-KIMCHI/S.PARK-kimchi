# Сайт кимчи S.PARK — одностраничник с формой заказа

Пробная версия. Сделана на Astro, страница статическая.

## Как запустить у себя
1. Установить Node.js 22.
2. В папке проекта: `npm install`, затем `npm run dev` и открыть http://localhost:4321
3. Сборка: `npm run build`. Готовый сайт появится в папке `dist`.

## Где править
- Тексты, цены, телефон, реквизиты: `src/data/site.js`. Строки с пометкой `TODO` ещё нужно подтвердить.
- Вёрстка и стили: `src/pages/index.astro`, `src/styles/global.css`.
- Фото и видео: `public/img`, `public/media`.

## Форма заказа
Сейчас демо: проверяет поля и показывает «Заявка принята», но никуда не отправляет.
В рабочей версии заявки будут приходить в Telegram-бот и на почту.

## Публикация на GitHub Pages
Workflow лежит в `.github/workflows/deploy.yml`. В Settings → Pages → Source выбрать «GitHub Actions».
Для репозитория `<org>.github.io` поменять в workflow `BASE_PATH` на `/`.
