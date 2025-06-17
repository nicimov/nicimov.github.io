---
layout: archive
lang: ru
title: "Publications"
permalink: /ru/publications/
author_profile: true
---

# "Структурно-функциональная компартментализация ядер кумулюсных клеток: возрастная динамика у мышей BALB/c (Mus musculus)"

### Обзор исследования
Данное исследование дополняет мою магистерскую диссертацию, изучая организацию ядер кумулюсных клеток у мышей BALB/c разных возрастных групп. Проект сосредоточен на:

- **3D-архитектуре ядра**: Количественная оценка пространственной реорганизации ядерных телец (например, телец Кахаля) при старении.
- **Методологических инновациях**: Разработан новый модульный макрос для ImageJ/RStudio, который:
  - Автоматизирует сегментацию ядер.
  - Количественно оценивает 3D-параметры ядерных телец.
  - Исключает артефакты.

### Описание инструмента
Пользовательский макрос:
- **Стандартизирует анализ**: Уменьшает субъективные ошибки в данных флуоресцентной микроскопии.
- **Кросс-адаптируемость**: Совместим с другими ядерными белками (например, тельцами PML).
- **Открытый доступ**: [Код на GitHub](https://github.com/nicimov/3Dnucleus_data) с [DOI:10.5281/zenodo.15395330](https://doi.org/10.5281/zenodo.15395330).

### Предварительные результаты
Применение метода выявило:
- **Трехкратное снижение** количества coilin-положительных телец у старых мышей (12 мес.) по сравнению с молодыми (2–3 мес.).
- Возраст-зависимую пространственную переконфигурацию относительно DAPI-плотных регионов.

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


