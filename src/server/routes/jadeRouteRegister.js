import walk from 'walk';

const endsWith = function (str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

export default function (router) {
  const viewsDir = `${__dirname}/../../views`;
  const length = viewsDir.length;
  walk.walkSync(viewsDir, {
    listeners: {
      file: function (root, stat, next) {
        let prefix;
        const name = stat.name;
        if (endsWith(name, '.jade')) {
          prefix = root.substr(length);
          if (prefix.length !== 0) {
            let dir = root.substr(length);
            dir = dir.substr(1, dir.length);
            dir = `/${dir}`;
            const url = `${dir}/${name.substr(0, name.length - 5)}`;
            console.log('Register router', `/page${url}`);
            router.get(url, (req, res) => res.render(url.substring(1)));
          }
        }
        return next();
      },
    },
  });
}
