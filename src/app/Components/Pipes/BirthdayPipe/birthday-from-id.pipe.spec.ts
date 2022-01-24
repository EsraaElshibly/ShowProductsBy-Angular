import { BirthdayFromIDPipe } from './birthday-from-id.pipe';

describe('BirthdayFromIDPipe', () => {
  it('create an instance', () => {
    const pipe = new BirthdayFromIDPipe();
    expect(pipe).toBeTruthy();
  });
});
