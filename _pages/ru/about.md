---
permalink: /ru/
lang: ru
title: ""
author_profile: true
redirect_from: 
  - /ru/about/
  - /ru/about.html
---

## Текущий фокус: 3D-анализ ядерных биоконденсатов
Я исследую взаимосвязь **пространственной организации** ядерных структур (телец Кахаля, PML-тел, спеклов, ядрышек) с клеточной функцией и старением. Методология включает:
- **Передовую микроскопию** (конфокальная, сверхразрешение)
- **Кастомные вычислительные пайплайны** для 3D-сегментации
- **Разработку open-source инструментов** для пространственной цитологии

### Почему важен 3D-анализ
Хотя конфокальная микроскопия генерирует 3D-данные, исследователи часто используют 2D-проекции для упрощения анализа [(MDPI, 2021)](https://www.mdpi.com/2078-2489/12/6/239). Это скрывает критически важную информацию о:
- Динамике **жидкофазного разделения (LLPS)**
- Взаимодействиях **хроматин-ядерные тельца**
- **Анизотропных распределениях**, связанных с транскрипцией

Мои инструменты извлекают эти "скрытые" данные и раскрывают как архитектура ядра имеет функциональное значение. Цель — создать "мост" между **биоинформатикой и клеточной морфологией**.

<div style="
  background: rgba(3, 102, 214, 0.08);
  border-left: 4px solid #0366d6;
  padding: 12px;
  margin: 12px 0;
  border-radius: 3px;
  color: inherit;
">
Как цитолог, я использую знания о клеточном метаболизме для критической оценки математических методов анализа. Это позволяет обеспечивать соответствие инструментов реальному клеточному поведению и экспериментальной валидности.
</div>

## Ключевые проекты: Nuclear Analysis Suite
### [3D-анализ ядерных телец](https://github.com/nicimov/3Dnucleus_data)  
*Open-source проект на ImageJ/R для высокопроизводительного анализа биоконденсатов*  

Чтобы глубоко понять принципы работы цитологических инструментов, я разработал собственный макрос анализа изображений. Написание кода с нуля дало полный контроль над обработкой клеточных данных.

**Основные функции**:
- Обработка 1000+ `.lif` файлов за <3 ч  
- Количественный анализ:
  - Объём, интенсивность и распределение телец Кахаля/PML  
  - Близость к хроматину (перекрытие с DAPI)  
  - Кластерные паттерны LLPS  
- Модульный дизайн для других структур (ядрышки, histone locus bodies)  

**Пример вывода**:  
![Workflow](/images/workflow.png)  
*Автоматическая сегментация coilin+ телец (зелёные), конденсированного хроматина (красные) и деконденсированных областей (синие) в ядрах кумулюсных клеток.*

## Образовательный проект: 3D-реконструкция ядра

### Описание
Создал **3D-модель ядра кумулюсной клетки** на основе серийных конфокальных срезов. Проект объединяет методы микроскопии и вычислительного моделирования для создания интерактивного образовательного инструмента.

**Функции**:
- Нажмите цифры `1`-`3` для получения информации о ядерных структурах

<div class="sketchfab-embed-wrapper"> <iframe title="V1_CB_DAPI_rec2 iteration 1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/3e9640fef610406484c2abb49b563e71/embed?autospin=1&autostart=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/v1-cb-dapi-rec2-iteration-1-3e9640fef610406484c2abb49b563e71?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> V1_CB_DAPI_rec2 iteration 1 </a> by <a href="https://sketchfab.com/sleepyday?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> A.A. </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

## Методология

### Получение изображений
- **24 конфокальных среза** с шагом **0.5 мкм** (Z-стеки)

### 3D-реконструкция
- Обработка в ImageJ/Fiji:
  - Плагины `StackReg` (выравнивание), `Advanced volume reconstruction`
- Генерация первичной 3D-модели

### Оптимизация в Blender
- Ручная коррекция:
  - Удаление артефактов
  - Оптимизация топологии поверхностей
- Улучшения:
  - Детализация структур
  - Оптимизация рендеринга