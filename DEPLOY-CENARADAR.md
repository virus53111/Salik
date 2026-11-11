# CenaRadar deployment

Static website at https://cenaradar.online, independent of MurdiliMax.

Source: main branch, repository root. GitHub Settings → Pages → Deploy from a branch → main / (root). The `CNAME` file declares `cenaradar.online`.

Set DNS for apex @ to these A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; optional www CNAME virus53111.github.io. Enable HTTPS on GitHub Pages after the certificate is ready.

After live DNS, submit https://cenaradar.online/sitemap.xml to Google Search Console. `robots.txt` currently permits indexing.

Estimates are client-side localStorage: they are not synced to server. PDF uses browser print, email opens mailto client.
