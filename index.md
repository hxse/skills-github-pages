---
title: Welcome to my blog
---

[about page](/blog/about.html)
[about page]({{ site.baseurl }}/about.html)
[about page]({{ 'about.html' | relative_url }})
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
