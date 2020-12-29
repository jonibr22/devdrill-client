import { BelowThousandPipe } from './below-thousand.pipe';

describe('BelowThousandPipe', () => {
  it('create an instance', () => {
    const pipe = new BelowThousandPipe();
    expect(pipe).toBeTruthy();
  });
});
