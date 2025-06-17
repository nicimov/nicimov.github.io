---
layout: archive
lang: ru
title: "Публикации"
permalink: /ru/publications/
author_profile: true
---

# 1. "Структурно-функциональная компартментализация ядер кумулюсных клеток: возрастная динамика у мышей"

### Обзор исследования
Данное исследование дополняет мою магистерскую диссертацию, изучая организацию ядер кумулюсных клеток у мышей BALB/c разных возрастных групп. Проект сосредоточен на:

- **3D-архитектуре ядра**: Количественная оценка пространственной реорганизации ядерных телец (например, телец Кахаля).
- **Возростной динамики ядрных телец**: Функциональная оценка пространственной реорганизации ядерных телец (предположения по причине динамики).
- **Методологических инновациях**: Разработан новый модульный макрос для ImageJ/RStudio, который:
  - Автоматизирует сегментацию ядер.
  - Количественно оценивает 3D-параметры ядерных телец.
  - Исключает артефакты (выбранные вручную).

### Предварительные результаты

- **Трехкратное снижение** количества coilin-положительных телец у старых мышей (12 мес.) по сравнению с молодыми (2–3 мес.).
- Возраст-зависимую пространственную переконфигурацию относительно DAPI-плотных регионов.

![Workflow2](/images/Rplot.png)

*Сравнение количества коилин+-телец в каждом ядре кумулюсных клеток между группой m2 (2-3 мес., n=3) и группой m12 (12 мес., n=3).*

### План публикации
Подготовка рукописи; целевая дата подачи: **2025–2026 гг.**
<!-- {% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %} -->

{% include base_path %}

<!-- New style rendering if publication categories are defined -->

<!--
{% if site.publication_category %}
  {% for category in site.publication_category  %}
    {% assign title_shown = false %}
    {% for post in site.publications reversed %}
      {% if post.category != category[0] %}
        {% continue %}
      {% endif %}
      {% unless title_shown %}
        <h2>{{ category[1].title }}</h2><hr />
        {% assign title_shown = true %}
      {% endunless %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
-->


