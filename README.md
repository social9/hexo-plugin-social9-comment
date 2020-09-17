Welcome to the Social9 Comment! If you're here for the first time, read this page to get started; it'll answer most of the frequently asked questions.

## Precondition

> Note: The plugin cannot be used if the prerequisites are not met, and the problems of installing this plugin when the prerequisites are not met will not be dealt with, and how to achieve the following prerequisites will not be dealt with!

1. Node.js >= 12.0
2. Use [Git](https://git-scm.com/) to manage the blog **source code**.
3. Use the `git log -1 --date=iso --pretty=format:"%ad"` command in the blog root directory to output a date.
4. How to determine whether the first item meets:
5. The blog root directory contains the `.git` folder, which is a hidden folder.
6. Meets the third item above.

## Installation

```shell
npm i hexo-social9-comment -S
```

or

```shell
cnpm i hexo-social9-comment -S
```

## Usage
Use as a helper function in **footer.ejs** theme templates `</body>`

```ejs
<%- s9CommentScript({}) %>
```

### Use in template file

```
<%- s9CommentBox({}) %>
```

### Use as a tag in md files for Comment Box

> Note: Please use strict JSON format for this method!

```nunjucks
{% s9CommentBox %}
{% ends9CommentBox %}
```



## Description -

Welcome to the [Social9 Comment](http://social9.com/)! If you’re here for the first time, read this page to get started; it’ll answer most of the frequently asked questions.

## What is Social9 Comment?

Comment helps you to grow discussions on your website – if you have a blog, you can embed Social9 Comment if you want your readers to add comments. It’s fast and free, has a modern interface, and is reasonably secure. Unlike most alternatives, Comments is lightweight, privacy-focused and I’ll never sell your data, show ads, embed third-party tracking scripts, or inject affiliate links.

  

## Frequently Asked Questions

### I don’t want to install and manage Comments on a server.
Social9 comment is a cloud-based solution where we take care of the server hosting, updates, and security and performance tuning for you. It is absolutely free.

### What features does Social9 Comment have?
Social9 Comment comes with a lot of useful features out-of-the-box: rich text support, upvotes and downvotes, automatic spam detection, moderation tools, sticky comments, thread locking, OAuth login, email notifications, and more!

### What does Social9 Comment look like? Do you have a demo?

Check out the screenshot below. social9 comment example

  

![](https://lh4.googleusercontent.com/mYmsHvaJ-PYt2bkIOeTKUkdMkYCCwEZo2-2-jyhZhqLk3s3GbWcM0EcEKG3r5hRqHnD3PAv_SUkOoT6ddG238mM6keeVSaCcABWsT-Xv2gZh9vfAPfL6hp1yb9f64rSVt6kdROh4)

  
### How is Social9 Comment different from Disqus, Facebook Comments, and the rest?

Most other products in this space do not respect your privacy; showing adverts is their primary business model and that nearly always comes at the users’ cost. We are providing everything for free and do not compromise with privacy.

  
### Is Social9 Comment free software?

Yes. Social9 Comment is made freely available and it will always stay that way.

  
### Disqus has a free plan. Why is the cloud version not free of cost?

When we say Social9 Comment is free, I mean free. The cloud version is offered free of cost because we are more focused on delivering value. We are aiming for a whole social media solution and not charging anything from our customers.

  
### Okay, how do I get started?

Glad you asked! please follow the steps given.

Powered by - [http://social9.com/](http://social9.com/)