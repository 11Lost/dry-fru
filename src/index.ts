import fs from 'fs';
import path from 'path';

export default {
  register() {},

  bootstrap({ strapi }) {
    strapi.server.use(async (ctx, next) => {
      if (
        ctx.path === '/' ||
        (
          !ctx.path.startsWith('/api') &&
          !ctx.path.startsWith('/admin') &&
          !ctx.path.startsWith('/uploads') &&
          !ctx.path.includes('.')
        )
      ) {
        const indexPath = path.join(
          process.cwd(),
          'public',
          'index.html'
        );

        if (fs.existsSync(indexPath)) {
          ctx.type = 'html';
          ctx.body = fs.createReadStream(indexPath);
          return;
        }
      }
      

      await next();
    });
  },
};