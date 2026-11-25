import 'dotenv/config';
import { app } from './app';

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`UniFECAF Flix API rodando em http://localhost:${port}`);
});
