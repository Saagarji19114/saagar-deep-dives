# Project conventions
- Keep new long-form article content in a dedicated module registered in the existing article catalogue, so unrelated entries remain unchanged.
- Use a dedicated enhanced view for the Astra article; preserve the existing rendering and functionality of older articles.
- Render sourced long-form articles through react-markdown without raw HTML, so citations, semantic headings and illustrations are supported safely.
- Use the shared article-text utilities for prose counts, reading times and heading anchors, so navigation and editorial verification agree.
- Use Helmet under the root provider for language-specific article metadata; static Vite social crawlers still receive sitewide head metadata.
- Import generated illustrations as project assets and label them as editorial illustrations, not real incident photographs or product screenshots.