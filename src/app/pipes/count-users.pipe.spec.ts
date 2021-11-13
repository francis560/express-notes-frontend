import { CountUsersPipe } from './count-users.pipe';

describe('CountUsersPipe', () => {
  it('create an instance', () => {
    const pipe = new CountUsersPipe();
    expect(pipe).toBeTruthy();
  });
});
