---
title: Algorithms for Generative Art
date: 2025-02-08
modification date: 2025-03-10T11:05:00
description: 
tags: 
aliases: 
draft: true
---
[Calculus for Makers](https://kyndinfo.notion.site/Calculus-for-Makers-bb98c726f0d24b758972a984cb4b357b) It involves several tutorials in English about calculus and the relationship between programming. The articles include programming [p5js](https://p5js.org) implementations of the relevant mathematical paradigms.

## Signed Distance Function (SDF)
A SDF is a function that can tell you how far a point is from a surface of a shape, say a sphere (usually in Euclidean space). For 3D coordinate system;
$$
d = \sqrt{(p_{x}-c_{x})^{2} + (p_{y}-c_{y})^{2} + (p_{z}-c_{z})^{2}} - r
$$

For 2D coordinate system;
$$
d = \sqrt{(p_{x}-c_{x})^{2} + (p_{y}-c_{y})^{2}} - r
$$
Calculate distance to circle using p5JS;
```js
function sdf(p, center, radius) {
    return Math.sqrt(Math.pow(p.x - center.x, 2) + Math.pow(p.y - center.y, 2)) - radius; // or use p5.Vector.dist()
}
```

Calculate distance to rectangle using p5JS;
```js
function sdf(p, size, center) {
    const diff = p.copy().sub(center);
    return Math.max(Math.abs(diff.x) - size.x, Math.abs(diff.y) - size.y);
}
```

Calculate distance to rotated rectangle using p5JS;
```js
function sdf(p, size, center) {
    let diff = p.copy().sub(center);
    diff = rotate2d(diff, Math.PI * 0.25);
    return Math.max(Math.abs(diff.x) - size.x, Math.abs(diff.y) - size.y);
}
```

[source](https://kyndinfo.notion.site/Signed-distance-functions-32b6ebf05fb84367ac59b4349f080b4c)


