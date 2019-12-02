<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @foreach($chapters as $chapter)
        <url>
            <loc>https://butterfliessay.com/chapter/{{$chapter->id}}</loc>
            <lastmod>{{ $chapter->created_at->tz('Hongkong')->toAtomString() }}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.6</priority>
        </url>
    @endforeach
</urlset>