<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 48rem;
            margin: 0 auto;
          }
          header {
            border-bottom: 1px solid #e5e7eb;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
          }
          h1 {
            font-size: 1.875rem;
            font-weight: 700;
            margin: 0 0 0.5rem;
          }
          .description {
            color: #6b7280;
            margin: 0 0 1rem;
          }
          .items {
            display: grid;
            gap: 2rem;
          }
          .item {
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 1.5rem;
          }
          .item:last-child {
            border-bottom: none;
          }
          .item h2 {
            font-size: 1.25rem;
            margin: 0 0 0.5rem;
          }
          .item h2 a {
            color: #111827;
            text-decoration: none;
          }
          .item h2 a:hover {
            text-decoration: underline;
          }
          .meta {
            color: #6b7280;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
          }
          .description {
            margin: 0.5rem 0;
          }
          footer {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #e5e7eb;
            font-size: 0.875rem;
            color: #6b7280;
          }
        </style>
      </head>
      <body>
        <header>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="description"><xsl:value-of select="/rss/channel/description"/></p>
          <p><a href="{/rss/channel/link}">Visitar el sitio web</a> • <a href="{/rss/channel/link}blog">Ver todos los artículos</a></p>
        </header>
        
        <div class="items">
          <xsl:for-each select="/rss/channel/item">
            <article class="item">
              <h2>
                <a href="{link}">
                  <xsl:value-of select="title"/>
                </a>
              </h2>
              <div class="meta">
                <time><xsl:value-of select="pubDate"/></time>
                <xsl:if test="category">
                  <span> • </span>
                  <span class="categories">
                    <xsl:for-each select="category">
                      <span class="category">
                        <xsl:if test="position() > 1">, </xsl:if>
                        <xsl:value-of select="."/>
                      </span>
                    </xsl:for-each>
                  </span>
                </xsl:if>
              </div>
              <div class="description">
                <xsl:value-of select="description"/>
              </div>
              <a href="{link}">Leer más →</a>
            </article>
          </xsl:for-each>
        </div>
        
        <footer>
          <p>© <xsl:value-of select="substring(/rss/channel/lastBuildDate, 1, 4)"/> <xsl:value-of select="/rss/channel/title"/>. Todos los derechos reservados.</p>
          <p>Generado el <xsl:value-of select="/rss/channel/lastBuildDate"/></p>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
