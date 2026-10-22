---
title: Machine Learning and Deep Learning
date: 2026-10-21 12:30:18
description:
tags:
  - AI
aliases:
draft: false
---

Deep learning is a subset of machine learning, which is itself a subset of artificial intelligence. Think of it as nested circles: AI ⊃ ML ⊃ deep learning.

**Machine learning** is the broad idea of getting computers to learn patterns from data instead of following hand-written rules. You give an algorithm examples, it adjusts internal parameters to minimize error, and then it can make predictions on new data. Classic ML methods include linear regression, decision trees, random forests, k-nearest neighbors, SVMs, and k-means clustering.

**Deep learning** is the specific branch of ML that uses artificial neural networks with many layers (hence "deep"). Each layer transforms its input into a slightly more abstract representation, and the network is trained end to end with back propagation and gradient descent.

**The key practical difference: feature engineering**

In classical ML, a human usually decides which features matter. For an audio classifier you might compute MFCCs, spectral centroid and zero-crossing rate by hand, then feed those into a random forest. In deep learning, the network learns its own features from raw (or lightly processed) data: pixels, waveforms, text tokens. Early layers pick up simple things like edges or onsets, and later layers combine them into complex concepts like faces or phonemes.

**Other differences**

||Classical ML|Deep learning|
|---|---|---|
|Data needed|Works with small/medium datasets|Usually needs large datasets|
|Compute|Runs fine on a CPU|Benefits heavily from GPUs/Apple Silicon|
|Features|Hand-crafted|Learned automatically|
|Interpretability|Often easier to inspect|Often a "black box"|
|Best at|Tabular/structured data|Images, audio, text, generative tasks|

**Common deep learning architectures**

- **CNNs** for images and spectrograms
- **RNNs/LSTMs** for sequences (older approach for audio and text)
- **Transformers** for text, and increasingly everything else; LLMs like the ones you run through Ollama are transformers
- **Diffusion models and GANs/VAEs** for image and audio generation

**Rule of thumb:** for a spreadsheet of structured data with a few thousand rows, classical ML (e.g. gradient boosting) often wins. For perception and generation tasks (images, sound, language), deep learning dominates.
