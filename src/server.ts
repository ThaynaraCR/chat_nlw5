import { http } from './app';
import './websocket/client';
import './websocket/admin';

http.listen(3333, () => {
  console.log(`Server running on port 3333`);
});
