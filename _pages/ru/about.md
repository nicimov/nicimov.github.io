---
permalink: /ru/
lang: ru
title: ""
author_profile: true
redirect_from: 
  - /ru/about/
  - /ru/about.html
---

## 3D-анализ ядерных биоконденсатов
Моя научная деятельность посвещенна исследованию взаимосвязи **пространственной организации** ядерных структур (телец Кахаля, PML-телец, спеклов, ядрышек) с клеточной функцией и старением. 

Общие методологические навыки:
- **Подготовка препаратов** (для конфокального микроскопа, ТЭМ)
- **Передовая микроскопия** (конфокальная, электронная)
- **Разработка вычислительных схем** для 3D-сегментации
- **Разработка open-source инструментов** для развития пространственной цитологии

### Важность 3D-анализа
Хотя конфокальная микроскопия генерирует 3D-данные, исследователи часто используют 2D-проекции для упрощения анализа [(MDPI, 2021)](https://www.mdpi.com/2078-2489/12/6/239). Это скрывает критически важную информацию о:
- Динамике **жидкофазного разделения (LLPS)**
- Взаимодействиях **хроматин-ядерные тельца**
- **Анизотропных распределениях**, связанных с транскрипцией

Мои инструменты извлекают эти "скрытые" данные, а мои исследования — раскрывают их функциональное значение. Если кратко, то моя общая цель — укрепить взаимосвязь между **биоинформатикой и клеточной морфологией**.

<div markdown="1" style="
  background: rgba(3, 102, 214, 0.08);
  border-left: 4px solid #0366d6;
  padding: 12px;
  margin: 12px 0;
  border-radius: 3px;
  color: inherit;
">

Как цитолог, я применяю знания о клеточном метаболизме для критической оценки математических методов анализа. Это обеспечивает соответствие инструментов реальному клеточному поведению и экспериментальной валидности.
</div>

## Ключевые проекты: 3D-анализ ядерных телец

<div markdown="1" style="
  background: rgba(191, 255, 209, 0.25);
  border-left: 4px solid #5FED83;
  padding: 12px;
  margin: 12px 0;
  border-radius: 3px;
  color: inherit;
">[**3Dnucleus_data**](https://github.com/nicimov/3Dnucleus_data)  
*Проект с открытым доступом на ImageJ/R для высокопроизводительного анализа биоконденсатов*
</div>

Чтобы глубоко понять принципы работы цитологических инструментов, мною разработан собственный макрос для анализа изображений. Написание кода с нуля дало мне полный контроль над обработкой клеточных данных.

**Основные функции**:
- Обработка 1000+ `.lif` файлов за <3 ч  
- Количественный анализ:
  - Объём, интенсивность и распределение телец Кахаля/PML  
  - Близость к хроматину (перекрытие с DAPI)  
  - Кластерные паттерны LLPS  
- Модульный дизайн для других структур (ядрышки, histone locus bodies)  

**Пример работы макроса по автоматической идентификации обьектов**:  

![Workflow](/images/workflow.png)  
*Автоматическая сегментация coilin+ телец (зелёные), конденсированного хроматина (красные) и деконденсированных областей (синие) в ядрах кумулюсных клеток.*

**Пример работы макроса по извлечению статистических данных**:  

![Workflow1](/images/Rplot_viopoint.png)
*Сравнение объёма всех коилин+-телец (ядер кумулюсных клеток) между группой m2 (2-3 мес., n=3) и группой m12 (12 мес., n=3). Точки на графике относятся к индивидуальным коилин+-тельцам (n=652).*

![Workflow2](/images/Rplot.png)
*Сравнение количества коилин+-телец в каждом ядре кумулюсных клеток между группой m2 (2-3 мес., n=3) и группой m12 (12 мес., n=3).*



## Образовательный проект: 3D-реконструкция ядра

Мною была создана **3D-модель ядра кумулюсной клетки** на основе серийных конфокальных срезов. Проект объединяет методы микроскопии и вычислительного моделирования для создания интерактивного образовательного инструмента.

<div class="sketchfab-embed-wrapper"> <iframe title="V1_CB_DAPI_rec2 iteration 1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/3e9640fef610406484c2abb49b563e71/embed?autospin=1&autostart=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/v1-cb-dapi-rec2-iteration-1-3e9640fef610406484c2abb49b563e71?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> V1_CB_DAPI_rec2 iteration 1 </a> by <a href="https://sketchfab.com/sleepyday?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> A.A. </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>