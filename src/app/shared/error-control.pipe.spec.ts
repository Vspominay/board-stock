import { ErrorControlPipe } from './error-control.pipe';

describe('ErrorControlPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorControlPipe();
    expect(pipe).toBeTruthy();
  });
});
