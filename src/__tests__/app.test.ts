import request from 'supertest';
import app from '../app';

describe('Hello', () => {
  it('should be able to say: hello, name', async () => {
    const response = await request(app).get('/hello?name=Mesaque')
    expect(response.body).toMatchObject({
      "message": "Hello, Mesaque"
    });
  })
});