const critical = require('critical');

critical.generate({
    base: './dist',
    inline: true,
    src: 'index.html',
    dest: 'index-critical.html',
    minify: true,
    width: 1300,
    height: 900
});
