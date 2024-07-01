import { registerAs } from '@nestjs/config';
export default registerAs('modelConfig', () => ({
  public: '../../public/upload',
  modeldir: 'model',
  envdir: 'env',
  sourcedir: 'source',
  texturedir: 'texture',
  url: 'http://192.168.2.22:3000/upload/',
  port1: '2222',
}));
