import walk from 'walk';

const endsWith = function (str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

export default function (router) {
    let length, options, views_dir, walker;
    views_dir = __dirname + '/../../views';
    length = views_dir.length;
    walker = walk.walkSync(views_dir, options = {
        listeners: {
            file: function (root, stat, next) {
                let dir, name, prefix, url;
                name = stat.name;
                if (endsWith(name, '.jade')) {
                    prefix = root.substr(length);
                    if (prefix.length !== 0) {
                        dir = root.substr(length);
                        dir = dir.substr(1, dir.length);
                        dir = '/' + dir;
                        url = dir + '/' + name.substr(0, name.length - 5);
                        console.log('Register router', '/page' + url);
                        router.get(url, function (req, res, next) {
                            return res.render(url.substring(1));
                        });
                    }
                }
                return next();
            },
        },
    });
}