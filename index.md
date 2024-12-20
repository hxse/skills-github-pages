---
title: Welcome to my blog
---
<link rel="stylesheet" href="{{- 'assets/css/style.css' | relative_url -}}" />

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
