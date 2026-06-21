const fs = require('fs');
const path = require('path');

module.exports = {
  async index(ctx) {
    const indexPath = path.join(
      process.cwd(),
      'public',
      'index.html'
    );

    if (!fs.existsSync(indexPath)) {
      return ctx.notFound('Frontend build not found');
    }

    ctx.type = 'text/html';
    ctx.body = fs.createReadStream(indexPath);
  },
};