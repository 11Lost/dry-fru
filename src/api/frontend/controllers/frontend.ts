import fs from 'fs';
import path from 'path';

export default {
  async index(ctx) {
    const indexPath = path.join(
      process.cwd(),
      'public',
      'index.html'
    );
console.log('Index path:', indexPath,'00000000000000000000000000000000000');
    if (!fs.existsSync(indexPath)) {
      return ctx.notFound('Frontend build not found');
    }

    ctx.type = 'text/html';
    ctx.body = fs.createReadStream(indexPath);
  },
};